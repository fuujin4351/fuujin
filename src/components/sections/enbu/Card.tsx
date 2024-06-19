import React, { useRef, useEffect } from "react";
import styles from "@/styles/sections/enbu/Card.module.scss";
import { enbuList } from "./enbuData";
import gsap from "gsap";

const Card = () => {
  const cardsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsContainer.current) {
      const cards = Array.from(
        cardsContainer.current.children
      ) as HTMLElement[];
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target instanceof HTMLElement) {
              const startColor = entry.target.dataset.startcolor!;
              const endColor = entry.target.dataset.endcolor!;
              if (entry.isIntersecting) {
                animateCard(entry.target, startColor, endColor);
              } else {
                resetCard(entry.target);
              }
            }
          });
        },
        { threshold: 0.4 } // この部分変更で、表示されるタイミングを調整
      );

      cards.forEach((card) => observer.observe(card));

      return () => {
        cards.forEach((card) => observer.unobserve(card));
      };
    }
  }, []);

  const animateCard = (
    element: HTMLElement,
    startColor: string,
    endColor: string
  ) => {
    gsap.to(element, {
      background: `linear-gradient(135deg, ${startColor}, ${endColor})`,
      duration: 0.5, // アニメーションの速さ
      ease: "power2.inOut", // アニメーションのイージング
    });
  };

  const resetCard = (element: HTMLElement) => {
    gsap.to(element, {
      background: "linear-gradient(135deg, #fff, #fff)",
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <div ref={cardsContainer} className={styles.container}>
      {enbuList.map((enbu, index) => (
        <div
          key={index}
          data-startcolor={enbu.startColor}
          data-endcolor={enbu.endColor}
          className={styles.card}
          id={enbu.year}
        >
          <div className={styles.titlearea}>
            <h1 className={styles.title}>
              {enbu.year}年度演舞
              <br />
              {enbu.name}
            </h1>
          </div>
          <div className={styles.content}>
            <div className={styles.imgArea}>
              <iframe
                width="560"
                height="315"
                src={enbu.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={styles.img}
              ></iframe>
            </div>
            <div className={styles.textArea}>
              <p className={styles.text}>{enbu.theme}</p>
              <p className={styles.text}>{enbu.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
