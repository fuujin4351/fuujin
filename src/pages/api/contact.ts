import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendGmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // reCAPTCHA の検証を先に行います
  const recaptchaResponse = req.body.recaptchaResponse;
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
    return res.status(400).json({ message: "reCAPTCHA verification failed." });
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
    from: req.body.email,
    to: process.env.EMAIL_ADDRESS,
    subject: `お問い合わせ ${req.body.name}様より`,
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
      <p>名前: ${req.body.name}</p>
      <p>メッセージ内容: ${req.body.message}</p>
      <p>メールアドレス: ${req.body.email}</p>
    `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to send email." });
    } else {
      console.log(info);
      return res.status(200).json({ message: "Email sent successfully!" });
    }
  });
}
