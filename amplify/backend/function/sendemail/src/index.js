const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({ region: "us-east-1" });

exports.handler = async (event) => {
  console.log("📩 Event received:", JSON.stringify(event));

  // ✅ Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://wholistichealthapp.com",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  // Parse input
  let bodyData;
  try {
    bodyData = event.body ? JSON.parse(event.body) : event.arguments || event;
  } catch {
    bodyData = event.arguments || event;
  }
  const { to, subject, body, includeButton, buttonUrl } = bodyData;

  // Build HTML message
  let htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif;">
        <h2>${subject}</h2>
        <p>${body}</p>
  `;
  if (includeButton && buttonUrl) {
    htmlContent += `
      <a href="${buttonUrl}"
         style="display: inline-block; margin-top: 20px; padding: 12px 24px; 
                background-color: #4CAF50; color: white; text-decoration: none; 
                border-radius: 8px; font-size: 16px;">
        Open App
      </a>
    `;
  }
  htmlContent += `</body></html>`;

  const params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: {
        Html: { Data: htmlContent },
        Text: { Data: `${body}${includeButton ? `\n\nOpen App: ${buttonUrl}` : ""}` },
      },
      Subject: { Data: subject },
    },
    Source: "no-reply@outcomesexcellence.org", // SES-verified domain
  };

  try {
    const result = await ses.send(new SendEmailCommand(params));
    console.log("✅ Email sent:", result.MessageId);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://wholistichealthapp.com",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ success: true, messageId: result.MessageId }),
    };
  } catch (err) {
    console.error("❌ Error sending email:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://wholistichealthapp.com",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
