import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/sections/top/Mv.module.scss";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = [
  "/top/mv/1.webp",
  "/top/mv/3.webp",
  "/top/mv/4.webp",
  "/top/mv/2.webp",
  "/top/mv/5.webp",
  "/top/mv/6.webp",
  "/top/mv/7.webp",
];

function Mv() {
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const container = containerRef.current;
    if (!title || !container) return;
    const titleHeight = title.clientHeight;
    const windowHeight = window.innerHeight;
    const initialTop = windowHeight - titleHeight - 40;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.set(title, { top: initialTop });

      gsap.to(title, {
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0,
          onUpdate: (self) => {
            const top = initialTop + self.scroll();
            if (self.scroll() >= 253) {
              gsap.set(title, { top: initialTop + 253 });
            } else {
              gsap.set(title, { top: top });
            }
          },
        },
      });
    });
  }, []);

  return (
    <section className={styles.container} ref={containerRef} id="mv">
      <div className={styles.bg}></div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // スライドの切り替わりのアニメーション
        fadeEffect={{ crossFade: true }} // クロスフェード
        loop={true} // スライドをループさせる
        loopAdditionalSlides={1} // ループ時に追加するスライド数
        speed={1000} // スライドが切り替わる時の速度
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          waitForTransition: true,
        }} // スライド表示時間
        followFinger={false} // ユーザーの操作によるスライドの停止
        pagination={{
          el: ".swiper-pagination",
          clickable: false,
        }} // ページネーション, クリックで対象のスライドに切り替わる
        className={styles.slideWrapper}
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <Image
              src={src}
              width={1920}
              height={1038}
              alt="Slider Image"
              className={styles.slideImage + " slider-img"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.titleArea} ref={titleRef}>
        <h1 className={styles.title + " c-mv-title --bk"}>
          駆けろ<span className={styles.titleBlue + " --blue"}>青</span>春、
          <br className="sp" />
          轟け躍動
        </h1>
      </div>
    </section>
  );
}

export default Mv;
