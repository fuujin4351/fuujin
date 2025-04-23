import React, { useState } from "react";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "@/styles/contact/Confirm.module.scss";

const Confirm = () => {
  const router = useRouter();
  const { name, email, message } = router.query;
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const resiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleBack = () => {
    router.push({
      pathname: "/contact",
      query: { name, email, message },
    });
  };

  const handleChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async () => {
    if (!captchaValue) {
      alert("reCAPTCHAの検証を行ってください。");
      return;
    }

    await fetch("/api/contact", {
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
        router.push("/contact/success");
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
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={handleChange}
        />
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
