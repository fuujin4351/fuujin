import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/sections/about/Work.module.scss";

export default function Work() {
  const [text, setText] = useState("");
  const [showLine, setShowLine] = useState(false);
  const fullText = "私たちの活動";
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            setText((currentText) => {
              if (currentText.length < fullText.length) {
                return fullText.slice(0, currentText.length + 1);
              } else {
                clearInterval(timer);
                setShowLine(true); // テキスト表示完了後に線を表示
                return currentText;
              }
            });
          }, 150);
        }
      });
    });

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [headerRef]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titlearea}>
          <h1 ref={headerRef} className={styles.title}>
            {text}
          </h1>
          {showLine && <div className={styles.redLine}></div>}
        </div>
        <div className={styles.cotent}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.imgArea}>
                <Image
                  className={styles.img}
                  src="/about/work/1.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div className={styles.textArea}>
                <p className={styles.text}>大学内イベント</p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.imgArea}>
                <Image
                  className={styles.img}
                  src="/about/work/2.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div className={styles.textArea}>
                <p className={styles.text}>お祭り参加</p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.imgArea}>
                <Image
                  className={styles.img}
                  src="/about/work/3.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div className={styles.textArea}>
                <p className={styles.text}>依頼演舞</p>
              </div>
            </li>
          </ul>
        </div>
        {/* 下の段 */}
        <div className={styles.undcontent}>
          {/* 左 */}
          <div className={styles.undimagearea}>
            <Image
              className={styles.undimg}
              src="/about/work/4.png"
              alt="message"
              width={500}
              height={500}
            />
          </div>
          {/* 右 */}
          <div className={styles.undtext}>
            <p className={styles.description}>
              私たち風神は、毎年演舞テーマ、振り付け、曲、衣装までを自ら制作し、毎年違った演舞をお祭りで披露しています。
              <br />
              主な活動内容としては，大学内のイベントの活性化を行っています。
              <br />
              また，よさこいソーランの楽しさを伝えるため，大学外の各地のお祭りや他大学など，さまざまなイベントに参加しています！
              <br />
              演舞依頼が入れば、どこへでも飛んで行きます！
              <br />
              よさこいを通して、『みんなに笑顔を届ける』を目標にお祭りに参加しています！
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
