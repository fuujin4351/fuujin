import React, { useEffect, useRef } from "react";
import styles from "@/styles/contact/Contact.module.scss";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  const { query } = router;
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // URLクエリからのデータでフォームの初期値を設定
    if (nameRef.current)
      nameRef.current.value = Array.isArray(query.name)
        ? query.name[0]
        : query.name || "";
    if (emailRef.current)
      emailRef.current.value = Array.isArray(query.email)
        ? query.email[0]
        : query.email || "";
    if (messageRef.current)
      messageRef.current.value = Array.isArray(query.message)
        ? query.message[0]
        : query.message || "";
  }, [query]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("submit");

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    // データをAPIに送信する代わりに確認ページに遷移
    router.push({
      pathname: "/contact/confirm",
      query: data, // クエリパラメータとしてデータを渡す
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ</h1>

      <form
        className={styles.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <div className={styles.row}>
          <div className={styles.label}>
            <label htmlFor="name">お名前</label>
            <span>必須</span>
          </div>

          <input
            className={styles.input}
            type="text"
            id="name"
            required
            ref={nameRef}
            placeholder="風神太郎"
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            <label className={styles.item} htmlFor="email">
              メールアドレス
            </label>
            <span>必須</span>
          </div>

          <input
            className={styles.input}
            type="text"
            id="email"
            required
            ref={emailRef}
            placeholder="fuujin@smaple.com"
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            <label className={styles.item} htmlFor="message">
              メッセージ
            </label>
            <span>必須</span>
          </div>

          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            required
            ref={messageRef}
            placeholder="例: 依頼演舞の件について"
          ></textarea>
        </div>

        <div className={styles.btn}>
          <button className={styles.button} type="submit">
            送信
          </button>
        </div>
      </form>
    </div>
  );
}

export default index;
