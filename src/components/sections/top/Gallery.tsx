import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/sections/top/Gallery.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);

  useEffect(() => {
    const first = firstRef.current;
    const second = secondRef.current;
    const third = thirdRef.current;
    const fourth = fourthRef.current;
    const fifth = fifthRef.current;
    const contents = [first, second, third, fourth, fifth];

    gsap.utils.toArray(contents).forEach((content: any, index) => {
      const element = content as HTMLElement; // 型アサーションを追加
      if (index % 3 === 0) {
        gsap.fromTo(
          element,
          { "clip-path": "inset(0 100% 0 0)", backgroundSize: "110%", y: 20 },
          {
            y: 0,
            "clip-path": "inset(0 0% 0 0)",
            backgroundSize: "100%",
            ease: "power1.inOut",
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
            },
          }
        );
      } else if (index % 2 === 0) {
        gsap.fromTo(
          element,
          { "clip-path": "inset(0 0 0 100%)", backgroundSize: "110%", y: 20 },
          {
            y: 0,
            "clip-path": "inset(0 0 0 0%)",
            backgroundSize: "100%",
            ease: "power1.inOut",
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
            },
          }
        );
      } else {
        gsap.fromTo(
          element,
          { "clip-path": "inset(0% 0 100% 0)", backgroundSize: "110%", y: 20 },
          {
            y: 0,
            "clip-path": "inset(0 0 0% 0)",
            backgroundSize: "100%",
            ease: "power1.inOut",
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.bgBigCircle}></div>
      <div className={styles.bgSmallCircle}></div>
      <div className={styles.content}>
        <div
          className={styles.firstImgContainer + " " + styles.imgContainer}
          ref={firstRef}
        ></div>
        <div
          className={styles.secondImgContainer + " " + styles.imgContainer}
          ref={secondRef}
        ></div>
        <div
          className={styles.thirdImgContainer + " " + styles.imgContainer}
          ref={thirdRef}
        ></div>
        <div
          className={styles.fourthImgContainer + " " + styles.imgContainer}
          ref={fourthRef}
        ></div>
        <div
          className={styles.fifthImgContainer + " " + styles.imgContainer}
          ref={fifthRef}
        ></div>
      </div>
    </div>
  );
}

export default Gallery;
