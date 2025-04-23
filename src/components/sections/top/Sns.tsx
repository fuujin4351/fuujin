import React from "react";
import styles from "@/styles/sections/top/Sns.module.scss";
import Image from "next/image";

function Sns() {
  return (
    <section className={styles.sns} id="sns">
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h2 className={styles.title + " c-title2 --bk"}>
            公式SNS・各種リンク
          </h2>
        </div>
        <div className={styles.content}>
          <div className={styles.snsArea}>
            <p className={styles.snsTitle + " c-sns-title"}>X(旧Twitter)</p>
            <Image
              src="/top/sns/logo-black.png"
              alt="Twitter"
              width={100}
              height={100}
              className={styles.snsIcon}
            />
          </div>
          <div className={styles.snsArea}>
            <p className={styles.snsTitle + " c-sns-title"}>Instagram</p>
            <Image
              src="/top/sns/instagram.svg"
              alt="Instagram"
              width={100}
              height={100}
              className={styles.snsIcon}
            />
          </div>
          <div className={styles.snsArea}>
            <p className={styles.snsTitle + " c-sns-title"}>Youtube</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sns;
