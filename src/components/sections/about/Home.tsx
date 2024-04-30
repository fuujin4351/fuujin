// pages/index.js
import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/sections/about/Home.module.scss";

export default function Home() {
  const [text, setText] = useState("");
  const [animateLine, setAnimateLine] = useState(false);
  const fullText = "風神とは";
  const headerRef = useRef(null);
  const lineRef = useRef(null);

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
                setAnimateLine(true); // テキスト表示完了後に線のアニメーションを開始
                return currentText;
              }
            });
          }, 200);
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
    <div className={styles.container}>
      <h1 ref={headerRef}>{text}</h1>
      <div
        className={styles.redLine}
        ref={lineRef}
        style={{ left: animateLine ? "0" : "-100%" }}
      ></div>
    </div>
  );
}
