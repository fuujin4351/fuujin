// Award.js
import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/sections/about/Award.module.scss";
import { awardList } from "./awardList";

interface AwardItemProps {
  award: {
    year: string;
    name: string;
    prize: string;
  };
}

const Award: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [showLine, setShowLine] = useState<boolean>(false);
  const fullText = "受賞歴";
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
  }, [headerRef]);

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
      {/* 受賞リスト */}
      <div className={styles.content}>
        {awardList.map((award, index) => (
          <AwardItem key={index} award={award} />
        ))}
      </div>
    </div>
  );
};

const AwardItem: React.FC<AwardItemProps> = ({ award }) => (
  <div className={styles.award}>
    <p className={styles.text}>
      {award.year} {award.name} {award.prize}
    </p>
  </div>
);

export default Award;
