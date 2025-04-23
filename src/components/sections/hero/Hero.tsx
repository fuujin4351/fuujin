import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/hero/Hero.module.scss";

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
  { src: "10.webp", styleClass: styles.img10 },
];

const preloadImages = () => {
  images.forEach((image) => {
    const img = new window.Image();
    img.src = `/hero/${image.src}`;
  });
};

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState({ src: "", styleClass: "" });

  useEffect(() => {
    preloadImages();
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []);

  return (
    <section>
      <div className={styles.container}>
        {currentImage.src && (
          <Image
            src={`/hero/${currentImage.src}`}
            alt="Random Image"
            className={currentImage.styleClass}
            width={1920} // 適切な幅を指定
            height={400} // 適切な高さを指定
            objectFit="cover"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
