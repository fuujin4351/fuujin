import React, { useEffect, useRef } from "react";
import styles from "@/styles/sections/top/We.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function We() {
  const contentRef = useRef(null);
  const listRef1 = useRef(null);
  const listRef2 = useRef(null);
  const listRef3 = useRef(null);
  const listRef4 = useRef(null);
  const spanRef1 = useRef(null);
  const spanRef2 = useRef(null);

  useEffect(() => {
    const container = contentRef.current;
    const list1 = listRef1.current;
    const list2 = listRef2.current;
    const list3 = listRef3.current;
    const list4 = listRef4.current;
    const span1 = spanRef1.current;
    const span2 = spanRef2.current;
    const mm = gsap.matchMedia();

    gsap.set([list1, list3], { y: -100 });
    gsap.set([list2, list4], { y: 100 });
    const bgScrollTrigger = {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
    };
    gsap.to([list1, list3], {
      y: 100,
      scrollTrigger: bgScrollTrigger,
    });
    gsap.to([list2, list4], {
      y: -100,
      scrollTrigger: bgScrollTrigger,
    });

    mm.add("(min-width: 769px)", () => {
      gsap.set(span1, { x: 100 });
      gsap.set(span2, { x: -100 });

      const textScrollTrigger = {
        trigger: container,
        start: "30% 100%",
        end: "45% 50%",
        scrub: 0,
      };

      gsap.to(span1, {
        x: -50,
        scrollTrigger: textScrollTrigger,
      });
      gsap.to(span2, {
        x: 100,
        scrollTrigger: textScrollTrigger,
      });
    });

    mm.add("(max-width: 768px)", () => {
      gsap.set(span1, { x: 100 });
      gsap.set(span2, { x: -100 });

      const textScrollTrigger = {
        trigger: container,
        start: "40% 100%",
        end: "50% 50%",
        scrub: 0,
      };

      gsap.to(span1, {
        x: -20,
        scrollTrigger: textScrollTrigger,
      });
      gsap.to(span2, {
        x: 100,
        scrollTrigger: textScrollTrigger,
      });
    });
  });
  return (
    <section className={styles.we} id="we">
      <div className={styles.container}>
        <div className={styles.bg}></div>
        <div className={styles.textArea}>
          <p className={styles.text}>
            <span className={styles.span} ref={spanRef1}>
              あふれんばかりの
            </span>
            <span className={styles.span2} ref={spanRef2}>
              風神魂
            </span>
          </p>
        </div>
        <div className={styles.content} ref={contentRef}>
          <ul className={styles.list} ref={listRef1}>
            <li className={styles.item}>
              <Image
                src="/top/we/1.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
            <li className={styles.item}>
              <Image
                src="/top/we/2.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
            <li className={styles.item}>
              <Image
                src="/top/we/3.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
          </ul>
          <ul className={styles.list} ref={listRef2}>
            <li className={styles.item}>
              <Image
                src="/top/we/4.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
            <li className={styles.item}>
              <Image
                src="/top/we/5.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
            <li className={styles.item}>
              <Image
                src="/top/we/6.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
          </ul>
          <ul className={styles.list} ref={listRef3}>
            <li className={styles.item}>
              <Image
                src="/top/we/7.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
            <li className={styles.item}>
              <Image
                src="/top/we/8.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
            <li className={styles.item}>
              <Image
                src="/top/we/9.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
          </ul>
          <ul className={styles.list} ref={listRef4}>
            <li className={styles.item}>
              <Image
                src="/top/we/10.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
            <li className={styles.item}>
              <Image
                src="/top/we/11.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
            <li className={styles.item}>
              <Image
                src="/top/we/12.webp"
                className={styles.img}
                alt=""
                width={700}
                height={900}
              ></Image>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default We;
