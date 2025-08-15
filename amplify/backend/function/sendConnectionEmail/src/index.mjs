
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" }); // replace with your SES region

export const handler = async (event) => {
  const toEmail = event.toEmail || "recipient@example.com";
  const subject = event.subject || "Default Subject";
  const bodyText = event.bodyText || "Default message body.";

  const params = {
    Source: "no-reply@outcomesexcellence.org", // Replace with your verified sender
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "UTF-8",
      },
      Body: {
        Text: {
          Data: bodyText,
          Charset: "UTF-8",
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    await ses.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
