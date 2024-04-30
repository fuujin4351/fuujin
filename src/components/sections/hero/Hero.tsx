import React from "react";
import Image from "next/image";
import styles from "@/styles/hero/Hero.module.scss";
import { useState, useEffect } from "react";

function Hero() {
  const images = [
    { src: "1.webp", styleClass: styles.img1 },
    { src: "2.webp", styleClass: styles.img2 },
    { src: "3.webp", styleClass: styles.img3 },
    { src: "4.webp", styleClass: styles.img4 },
    { src: "5.webp", styleClass: styles.img5 },
    { src: "6.webp", styleClass: styles.img5 },
    { src: "7.webp", styleClass: styles.img5 },
    { src: "8.webp", styleClass: styles.img5 },
    { src: "9.webp", styleClass: styles.img5 },
    { src: "10.webp", styleClass: styles.img5 },
    { src: "11.webp", styleClass: styles.img5 },
    { src: "12.webp", styleClass: styles.img5 },
    { src: "13.webp", styleClass: styles.img5 },
  ];

  const [currentImage, setCurrentImage] = useState({ src: "", styleClass: "" });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={`/hero/${currentImage.src}`}
        alt="Random Image"
        className={currentImage.styleClass}
      />
    </div>
  );
}

export default Hero;
