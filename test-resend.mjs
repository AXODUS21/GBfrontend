import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    console.log("Attempting to send email...");
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Global Bright Futures <noreply@globalbrightfutures.org>",
      to: ["lodorian19@gmail.com"],
      subject: "Resend Integration Test",
      html: "<p>This is a test email to verify that the Resend integration is working correctly.</p>",
    });
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

testEmail();
