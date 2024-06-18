import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/sections/about/Award.module.scss";

interface Award {
  year: string;
  name: string;
  prize: string;
}

const awardList: Award[] = [
  { year: "2007年", name: "ちばYOSAKOI2007", prize: "ミニマム準大賞受賞" },
  {
    year: "2013年",
    name: "ドリームよさこい2013",
    prize: "ブロンズ賞(総合3位)受賞",
  },
  { year: "2014年", name: "YOSAKOI鎌ヶ谷", prize: "優秀賞受賞" },
  { year: "2014年", name: "東京よさこい", prize: "豊島未来賞受賞" },
  { year: "2015年", name: "ドリーム夜さ来い祭り", prize: "MC賞受賞" },
  { year: "2016年", name: "大江戸ソーラン祭り", prize: "6位入賞" },
  { year: "2016年", name: "東京よさこい", prize: "三菱地所株式会社賞受賞" },
  {
    year: "2016年",
    name: "ドリーム夜さ来い祭り",
    prize: "アクアシティお台場賞受賞",
  },
  { year: "2017年", name: "東京よさこい", prize: "那珂川町長賞受賞" },
  {
    year: "2018年",
    name: "かみす舞っちゃげ祭り2018",
    prize: "学生大会大賞 (初代大賞)",
  },
  {
    year: "2018年",
    name: "ドリーム夜さ来い祭り",
    prize: "デックス東京ビーチ賞受賞",
  },
  { year: "2019年", name: "大江戸ソーラン祭り", prize: "5位入賞" },
  {
    year: "2019年",
    name: "かみす舞っちゃげ祭り",
    prize: "学生大会大賞(2連覇)",
  },
  {
    year: "2019年",
    name: "ドリーム夜さ来い祭り",
    prize: "MC賞受賞(個人賞)",
  },
  { year: "2023年", name: "東京よさこい", prize: "那珂川町長賞受賞" },
];

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

interface AwardItemProps {
  award: Award;
}

const AwardItem: React.FC<AwardItemProps> = ({ award }) => (
  <div className={styles.award}>
    <p className={styles.text}>
      {award.year} {award.name} {award.prize}
    </p>
  </div>
);

export default Award;
