import React from "react";
import styles from "@/styles/sections/top/Sns.module.scss";
import Image from "next/image";
import Link from "next/link";

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
            <Link
              href="https://x.com/fujin_4351_tw"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.snsLink}
            >
              <Image
                src="/top/sns/logo-black.png"
                alt="X"
                width={100}
                height={100}
                className={styles.snsIcon}
              />
            </Link>
          </div>
          <div className={styles.snsArea}>
            <p className={styles.snsTitle + " c-sns-title"}>Instagram</p>
            <Link
              href="https://www.instagram.com/fujin_4351/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.snsLink}
            >
              <Image
                src="/top/sns/instagram.svg"
                alt="Instagram"
                width={100}
                height={100}
                className={styles.snsIcon}
              />
            </Link>
          </div>
          <div className={styles.snsArea}>
            <p className={styles.snsTitle + " c-sns-title"}>Youtube</p>
            <Link
              href="https://www.youtube.com/@fujin_4351"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.snsLink}
            >
              <p className={styles.youtubeTitle + " c-sns-title"}>
                公式Youtube
              </p>
            </Link>
            <Link
              href="https://www.youtube.com/@MoriJun"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.snsLink}
            >
              <p className={styles.youtubeTitle + " c-sns-title"}>
                MoriJun動画様
              </p>
            </Link>

            <Link
              href="https://www.youtube.com/@ashios-yosakoi3358"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.snsLink}
            >
              <p className={styles.youtubeTitle + " c-sns-title"}>Ashios様</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sns;
