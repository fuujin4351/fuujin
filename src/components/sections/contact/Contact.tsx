import React, { useState } from "react";
import { useRouter } from "next/router";
import Confirm from "./Confirm";
import styles from "@/styles/contact/Contact.module.scss";

const Contact: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState<"form" | "confirm">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirm");
  };

  const handleBack = () => {
    // Remove any query parameters without full reload
    router.replace({ pathname: "/contact" }, undefined, { shallow: true });
    setStep("form");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ</h1>
      {step === "form" ? (
        <form className={styles.form} onSubmit={handleNext}>
          <div className={styles.row}>
            <div className={styles.label}>
              <label htmlFor="name">お名前</label>
              <span>必須</span>
            </div>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="風神太郎"
            />
          </div>
          <div className={styles.row}>
            <div className={styles.label}>
              <label htmlFor="email">メールアドレス</label>
              <span>必須</span>
            </div>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="fuujin@example.com"
            />
          </div>
          <div className={styles.row}>
            <div className={styles.label}>
              <label htmlFor="message">メッセージ</label>
              <span>必須</span>
            </div>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="例: 依頼演舞の件について"
            />
          </div>
          <div className={styles.btn}>
            <button className={styles.button} type="submit">
              確認画面へ
            </button>
          </div>
        </form>
      ) : (
        <Confirm data={formData} onBack={handleBack} />
      )}
    </div>
  );
};

export default Contact;
