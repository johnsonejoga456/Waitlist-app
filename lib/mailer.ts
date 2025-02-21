import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail
    pass: process.env.EMAIL_PASS, // App Password
  },
});

export async function sendConfirmationEmail(to: string, name: string, course: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Waitlist Registration Confirmation",
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for joining the waitlist for <strong>${course}</strong>.</p>
      <p>We will notify you once enrollment opens.</p>
      <p>Best regards, <br> The Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to:", to);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
