import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/sections/about/Work.module.scss";

const Work: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [showLine, setShowLine] = useState<boolean>(false);
  const fullText = "私たちの活動";
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timerRef.current = setInterval(() => {
            setText((currentText) => {
              if (currentText.length < fullText.length) {
                return fullText.slice(0, currentText.length + 1);
              } else {
                if (timerRef.current) {
                  clearInterval(timerRef.current);
                }
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
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titlearea}>
        <h1 ref={headerRef} className={styles.title}>
          {text}
        </h1>
        <div
          className={showLine ? styles.redLine : styles.transparentLine}
        ></div>
      </div>
      <div className={styles.content}>
        <ActivityList />
      </div>
      <div className={styles.undcontent}>
        <UndContent />
      </div>
    </div>
  );
};

const ActivityList: React.FC = () => (
  <ul className={styles.list}>
    {activities.map((activity, index) => (
      <li key={index} className={styles.item}>
        <div className={styles.imgArea}>
          <Image
            className={styles.img}
            src={activity.imgSrc}
            alt={activity.alt}
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.textArea}>
          <p className={styles.text}>{activity.text}</p>
        </div>
      </li>
    ))}
  </ul>
);

const UndContent: React.FC = () => (
  <>
    <div className={styles.undimagearea}>
      <Image
        className={styles.undimg}
        src="/about/work/4.png"
        alt="message"
        width={500}
        height={500}
      />
    </div>
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
  </>
);

const activities = [
  {
    imgSrc: "/about/work/1.png",
    alt: "大学内イベント",
    text: "大学内イベント",
  },
  {
    imgSrc: "/about/work/2.png",
    alt: "お祭り参加",
    text: "お祭り参加",
  },
  {
    imgSrc: "/about/work/3.png",
    alt: "依頼演舞",
    text: "依頼演舞",
  },
];

export default Work;
