import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/sections/about/Intro.module.scss";

export default function Intro() {
  const [text, setText] = useState("");
  const [showLine, setShowLine] = useState(false);
  const fullText = "風神とは";
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
        <div className={styles.content}>
          {/* 左 */}
          <div className={styles.text}>
            <p className={styles.description}>
              千葉工業大学の学生のみで構成された、よさこいソーランのチーム『千葉工業大学よさこいソーラン風神部』です。
              <br />
              ・2004年5月5日　創部
              <br />
              当時，千葉工業大学の一年生であった一人の女性の「よさこいの楽しさを，様々な人たちに知って欲しい！」という熱い気持ちから生まれる。
              <br />
              その後，くちコミでメンバーを拡大していく。
              <br />
              ・2004年11月22日　チームデビュー
              <br />
              千葉工業大学津田沼祭にて，デビューを飾ることとなる。
              <br />
              その後は大学内に留まらず，各地のイベントや養護施設など活動の領域を広げている。
            </p>
          </div>
          {/* 右 */}
          <div className={styles.imagearea}>
            <Image
              className={styles.img}
              src="/about/intro/1.png"
              alt="message"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
