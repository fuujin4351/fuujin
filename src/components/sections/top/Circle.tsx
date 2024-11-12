import React, { useEffect, useRef } from "react";
import styles from "@/styles/sections/top/Circle.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Circle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const circleImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // nullチェックを先に移動
    const containerHeight = container.clientHeight;
    const circleImg = circleImgRef.current;
    const sticky = stickyRef.current;

    gsap.fromTo(
      circleImg,
      { clipPath: "circle(25%)" },
      {
        clipPath: "circle(100%)",
        scrollTrigger: {
          trigger: sticky,
          start: "10% top",
          end: `+=${containerHeight}`,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.sticky} ref={stickyRef}>
        <Image
          src="/top/circle/1.webp"
          ref={circleImgRef}
          className={styles.imgArea}
          alt=""
          width={1440}
          height={900}
        ></Image>
      </div>
    </div>
  );
}

export default Circle;
