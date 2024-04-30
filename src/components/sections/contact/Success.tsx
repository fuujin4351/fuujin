import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/contact/Success.module.scss";

function Success() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        お問い合わせ<br className={styles.br}></br>ありがとうございます
      </h1>
      <div className={styles.box}>
        <div className={styles.imgarea}>
          <img src="/contact/1.png" className={styles.img} />
        </div>
        <div className={styles.description}>
          <p>
            この度はご連絡いただき、誠にありがとうございます。
            <br />
            お問い合わせ内容を確認の上、担当者よりご連絡させていただきます。
            <br />
            内容によってはお時間をいただく場合がございますので、
            <br />
            予めご了承ください。
            <br />
            何かご不明点がございましたら、以下の連絡先までお気軽にお問い合わせください。
            <br />
          </p>
          <p>メール: fuujinweb@gmail.com</p>
        </div>
      </div>

      <div className={styles.btn}>
        <Link href="/">
          <button>トップページへ戻る</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
