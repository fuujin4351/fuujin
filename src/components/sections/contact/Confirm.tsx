import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "@/styles/contact/Confirm.module.scss";

interface ConfirmProps {
  data: { name: string; email: string; message: string };
  onBack: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({ data, onBack }) => {
  const { name, email, message } = data;
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const resiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleBack = () => {
    onBack();
  };

  const handleChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async () => {
    if (!captchaValue) {
      alert("reCAPTCHAの検証を行ってください。");
      return;
    }

    await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain,",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        recaptchaResponse: captchaValue,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log("送信しました");
        alert("送信完了");
        window.location.href = "/contact/success";
      } else {
        alert("送信に失敗しました。");
      }
    });
  };

  return (
    <div>
      <h1 className={styles.title}>確認ページ</h1>
      <div className={styles.list}>
        <p className={styles.name}>名前</p>
        <span>{name}</span>
      </div>
      <div className={styles.list}>
        <p className={styles.email}>メールアドレス</p>
        <span>{email}</span>
      </div>
      <div className={styles.list}>
        <p className={styles.message}>メッセージ:</p>
        <span>{message}</span>
      </div>

      <div className={styles.recaptcha}>
        <ReCAPTCHA sitekey={resiteKey || ""} onChange={handleChange} />
      </div>

      <div className={styles.btn}>
        <button className={styles.btnback} onClick={handleBack}>
          戻る
        </button>
        <button className={styles.btnback} onClick={handleSubmit}>
          送信
        </button>
      </div>
    </div>
  );
};

export default Confirm;
