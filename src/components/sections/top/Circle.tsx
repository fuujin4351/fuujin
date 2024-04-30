import React, { useEffect, useRef } from 'react'
import styles from '@/styles/sections/top/Circle.module.scss'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Circle() {
    const containerRef = useRef(null)
    const stickyRef = useRef(null)
    const circleImgRef = useRef(null)
    
    useEffect(() => {
        const sticky = stickyRef.current;
        const container = containerRef.current;
        const containerHeight = container.clientHeight;
        const circleImg = circleImgRef.current;

        gsap.fromTo(circleImg, {clipPath: 'circle(25%)'}, {
            clipPath: 'circle(100%)',
            scrollTrigger: {
                trigger: sticky,
                start: '10% top',
                end: `+=${containerHeight}`,
                scrub: true,
            }
        })

    })

  return (
    <div className={styles.container} ref={containerRef}>
        <div className={styles.sticky} ref={stickyRef}>
            <Image src='/top/circle/1.png' ref={circleImgRef} className={styles.imgArea} alt='' width={1440} height={900}></Image>
        </div>
    </div>
  )
}

export default Circle
