import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/sections/top/Message.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Message() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const line5Ref = useRef<HTMLDivElement>(null);
  const line6Ref = useRef<HTMLDivElement>(null);
  const line7Ref = useRef<HTMLDivElement>(null);
  const line8Ref = useRef<HTMLDivElement>(null);
  const line91Ref = useRef<HTMLDivElement>(null);
  const line92Ref = useRef<HTMLDivElement>(null);
  const line93Ref = useRef<HTMLDivElement>(null);
  const line10Ref = useRef<HTMLDivElement>(null);
  const line11Ref = useRef<HTMLDivElement>(null);
  const line12Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;
    const line4 = line4Ref.current;
    const line5 = line5Ref.current;
    const line6 = line6Ref.current;
    const line7 = line7Ref.current;
    const line8 = line8Ref.current;
    const line91 = line91Ref.current;
    const line92 = line92Ref.current;
    const line93 = line93Ref.current;
    const line10 = line10Ref.current;
    const line11 = line11Ref.current;
    const line12 = line12Ref.current;
    const img = imgRef.current;
    if (
      !line1 ||
      !line2 ||
      !line3 ||
      !line4 ||
      !line5 ||
      !line6 ||
      !line7 ||
      !line8 ||
      !line91 ||
      !line92 ||
      !line93 ||
      !line10 ||
      !line11 ||
      !line12 ||
      !img
    )
      return;
    const line1Height = line1.clientHeight + 50;
    const lines = [
      line1,
      line2,
      line3,
      line4,
      line5,
      line6,
      line7,
      line8,
      line91,
      line92,
      line93,
      line10,
      line11,
      line12,
    ];

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.utils.toArray(lines).forEach((line: any, index) => {
        gsap.fromTo(
          line,
          { backgroundPositionY: "100%", y: 10 },
          {
            backgroundPositionY: "-23%",
            y: 0,
            scrollTrigger: {
              trigger: line,
              start: "top 92%",
              end: "+=" + line1Height,
              scrub: true,
            },
          }
        );
      });
    });
    mm.add("(max-width: 768px)", () => {
      gsap.utils.toArray(lines).forEach((line: any, index) => {
        gsap.fromTo(
          line,
          { backgroundPositionY: "100%", y: 10 },
          {
            backgroundPositionY: "-20%",
            y: 0,
            scrollTrigger: {
              trigger: line,
              start: "top 70%",
              end: "+=" + line1Height,
              scrub: true,
            },
          }
        );
      });
    });
    gsap.fromTo(
      img,
      { backgroundSize: "110%" },
      {
        backgroundSize: "100%",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section className={styles.container} id="message">
      <div className={styles.leftCircle}></div>
      <div className={styles.leftCircleSmall}></div>
      <div className={styles.contentArea}>
        <div className={styles.textArea}>
          <p className={styles.text + " c-message-text"}>
            <span className={styles.line} ref={line1Ref}>
              踊って、笑って、語り合う。
            </span>
            <br />
            <span className={styles.line} ref={line2Ref}>
              そんな温かな時間を通じて、
            </span>
            <br />
            <span className={styles.line} ref={line3Ref}>
              この世界に元気と笑顔を届けたい。
            </span>
            <br />
            <br />

            <span className={styles.line} ref={line4Ref}>
              だからこそ、
            </span>
            <br />
            <span className={styles.line} ref={line5Ref}>
              私たちはいつも失敗を恐れず、
            </span>
            <br />
            <span className={styles.line} ref={line6Ref}>
              笑顔を忘れずにいます。
            </span>
            <br />
            <br />

            <span className={styles.line} ref={line7Ref}>
              『誰かを楽しませたい』
            </span>
            <br />
            <span className={styles.line} ref={line8Ref}>
              それが風神の信念です。
            </span>
            <br />
            <br />

            <span className={styles.line + " pc"} ref={line91Ref}>
              それが逆風にも負けず、自由に笑顔を広げる、
            </span>
            <br className="pc" />
            <span className={styles.line + " sp"} ref={line92Ref}>
              それが逆風にも負けず、
            </span>
            <br className="sp" />
            <span className={styles.line + " sp"} ref={line93Ref}>
              自由に笑顔を広げる、
            </span>
            <br className="sp" />
            <span className={styles.line} ref={line10Ref}>
              貴重な存在になるはずだから。
            </span>
            <br />
            <br />

            <span className={styles.line} ref={line11Ref}>
              明るい未来を作るために、
            </span>
            <br />
            <span className={styles.line} ref={line12Ref}>
              今日も小さな世界を明るく照らします。
            </span>
          </p>
        </div>
        <div className={styles.titleArea}>
          <h3 className={styles.title + " c-message-title"}>
            <span>
              風神が<span className={styles.red}>元気</span>と
              <span className={styles.red}>笑顔</span>を<br />
            </span>
            <span className={styles.mass}>お届けします</span>
          </h3>
        </div>
      </div>
      <div className={styles.imgArea} ref={imgRef}></div>
    </section>
  );
}

export default Message;
