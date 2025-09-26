import nodemailer from "nodemailer";
import smtp from 'smtp'



console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

const transporter = nodemailer.createTransport({
  service: "gmail", // you can also use host, port, secure for custom SMTP
  auth: {
    user: process.env.EMAIL_USER, // Gmail address or SMTP user
    pass: process.env.EMAIL_PASS, // Gmail App Password or SMTP password
  },
});


export const sendUserPasswordResetEmail = async (user, link) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: user.email,
      subject: "GeekShop - Password Reset Link",
      html: `
        <p>Hello ${user.name || "User"},</p>
        <p>You requested to reset your password. Click the link below:</p>
        <p><a href="${link}">Click Here</a> to Reset Your Password</p>
        <p>If you did not request this, please ignore this email.</p>
      `,
    });

    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
