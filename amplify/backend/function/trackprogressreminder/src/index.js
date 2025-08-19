const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

// Node.js 18+ has native fetch
const ses = new SESClient({ region: "us-east-1" });

// Replace with your AppSync endpoint and API key
const APPSYNC_API_URL = "https://t7lr2ugphzbedefmsvd7m6xzhy.appsync-api.us-east-1.amazonaws.com/graphql";
const APPSYNC_API_KEY = "da2-7tpjb4gicfbplemh2ftvujuzo4";

const listCreatePlansQuery = `
  query ListCreatePlans {
    listCreatePlans {
      items {
        id
        userId
        createdAt
      }
    }
  }
`;

const listUserEmailQuery = `
  query ListUserEmail($filter: ModelGeneralInformationFilterInput) {
    listGeneralInformations(filter: $filter) {
      items {
        Email
      }
    }
  }
`;

// Helper to send GraphQL requests using native fetch
async function graphqlRequest(query, variables = {}) {
  const res = await fetch(APPSYNC_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APPSYNC_API_KEY,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GraphQL request failed: ${res.status} ${text}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(`GraphQL request failed: ${JSON.stringify(json.errors)}`);
  }
  return json.data;
}

module.exports.handler = async () => {
  console.log("📩 Running weekly reminder Lambda");

  try {
    const createPlansData = await graphqlRequest(listCreatePlansQuery);
    const plans = createPlansData.listCreatePlans.items;

    for (const plan of plans) {
      const createdAt = new Date(plan.createdAt);
      const daysSinceCreation = Math.floor((Date.now() - createdAt) / (1000 * 60 * 60 * 24));

      // Send email every 7 days since creation
      if (daysSinceCreation % 7 !== 0) continue;

      // ✅ Use list query to get email
      const userData = await graphqlRequest(listUserEmailQuery, {
        filter: { userId: { eq: plan.userId } }
      });

      const email = userData.listGeneralInformations.items[0]?.Email;
      if (!email) continue;

      const subject = "Your Weekly Reminder from Wholistic Health App";
      const body = "Hi! This is your weekly reminder from the Wholistic Health App.";

      const params = {
        Destination: { ToAddresses: [email] },
        Message: {
          Body: { Text: { Data: body } },
          Subject: { Data: subject },
        },
        Source: "no-reply@outcomesexcellence.org", // SES verified
      };

      try {
        const result = await ses.send(new SendEmailCommand(params));
        console.log(`✅ Email sent to ${email}: ${result.MessageId}`);
      } catch (err) {
        console.error(`❌ Failed to send email to ${email}:`, err);
      }
    }

    return { statusCode: 200, body: "Weekly reminders processed." };
  } catch (err) {
    console.error("❌ Lambda failed:", err);
    return { statusCode: 500, body: err.message };
  }
};