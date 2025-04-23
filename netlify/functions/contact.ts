import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const body = JSON.parse(event.body || "{}");

  // reCAPTCHA の検証を先に行います
  const recaptchaResponse = body.recaptchaResponse;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const recaptchaVerifyResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${recaptchaResponse}`,
    }
  );

  const recaptchaVerifyData = await recaptchaVerifyResponse.json();

  if (!recaptchaVerifyData.success) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "reCAPTCHA verification failed." }),
    };
  }

  // reCAPTCHA検証が成功したら、メールを送信する
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 管理人が受け取るメール
  const toHostMailData = {
    from: body.email,
    to: process.env.EMAIL_ADDRESS,
    subject: `お問い合わせ ${body.name}様より`,
    text: `${body.message} Send from ${body.email}`,
    html: `
      <p>名前: ${body.name}</p>
      <p>メッセージ内容: ${body.message}</p>
      <p>メールアドレス: ${body.email}</p>
    `,
  };

  try {
    await transporter.sendMail(toHostMailData);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email." }),
    };
  }
};
