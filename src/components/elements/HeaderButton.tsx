"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/styles/elements/HeaderButton.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HeaderButton({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (active: boolean) => void;
}) {
  const toggleActiveHandler = () => {
    setActive(!active);
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonLine1Ref = useRef<HTMLSpanElement>(null);
  const buttonLine2Ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const button = buttonRef.current;
    const buttonLine1 = buttonLine1Ref.current;
    const buttonLine2 = buttonLine2Ref.current;
    if (!button || !buttonLine1 || !buttonLine2) return; // ここでnullチェックを追加

    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      button.addEventListener("click", () => {
        if (!active) {
          gsap.to(buttonLine1, {
            duration: 0.3,
            y: 6,
            rotate: -15,
            ease: "power2.inOut",
          });
          gsap.to(buttonLine2, {
            duration: 0.3,
            y: -6,
            rotate: 15,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(buttonLine1, {
            duration: 0.3,
            y: 0,
            rotate: 0,
            ease: "power2.inOut",
          });
          gsap.to(buttonLine2, {
            duration: 0.3,
            y: 0,
            rotate: 0,
            ease: "power2.inOut",
          });
        }
      });
    });
    mm.add("(max-width: 768px)", () => {
      button.addEventListener("click", () => {
        if (!active) {
          gsap.to(buttonLine1, {
            duration: 0.3,
            y: 3.7,
            rotate: -15,
            ease: "power2.inOut",
          });
          gsap.to(buttonLine2, {
            duration: 0.3,
            y: -3.7,
            rotate: 15,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(buttonLine1, {
            duration: 0.3,
            y: 0,
            rotate: 0,
            ease: "power2.inOut",
          });
          gsap.to(buttonLine2, {
            duration: 0.3,
            y: 0,
            rotate: 0,
            ease: "power2.inOut",
          });
        }
      });
    });
  }, [active]);
  return (
    <button
      className={styles.button}
      ref={buttonRef}
      onClick={toggleActiveHandler}
    >
      <span className={styles.line} ref={buttonLine1Ref}></span>
      <span className={styles.line} ref={buttonLine2Ref}></span>
    </button>
  );
}

export default HeaderButton;
