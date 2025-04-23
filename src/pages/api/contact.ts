import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // Only accept POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  // Parse request body
  let body: {
    name: string;
    email: string;
    message: string;
    recaptchaResponse: string;
  };
  try {
    body = JSON.parse(event.body || "");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid JSON" }),
    };
  }

  // Verify reCAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("Missing RECAPTCHA_SECRET_KEY");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server misconfiguration" }),
    };
  }

  const recaptchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(
        secretKey
      )}&response=${encodeURIComponent(body.recaptchaResponse)}`,
    }
  );
  const recaptchaData = (await recaptchaRes.json()) as { success: boolean };
  if (!recaptchaData.success) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "reCAPTCHA verification failed" }),
    };
  }

  // Send email
  const emailAddress = process.env.EMAIL_ADDRESS;
  const emailPassword = process.env.EMAIL_PASSWORD;
  if (!emailAddress || !emailPassword) {
    console.error("Missing email credentials");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server misconfiguration" }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: emailAddress,
      pass: emailPassword,
    },
  });

  const mailOptions = {
    from: body.email,
    to: emailAddress,
    subject: `お問い合わせ from ${body.name}`,
    html: `
      <p>名前: ${body.name}</p>
      <p>メールアドレス: ${body.email}</p>
      <p>メッセージ: ${body.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
};
