'use client'
import React, { useEffect, useRef } from 'react'
import styles from '@/styles/elements/HeaderNav.module.scss'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function HeaderNav({ active } : { active: boolean }) {
    const navRef = useRef(null)
    useEffect(() => {
        const nav = navRef.current;
        
    })
  return (
    <nav className={active ? styles.activeNav : styles.nav} ref={navRef}>
        <div className={styles.bg}>
            <div className={styles.leftCircle}>
            </div>
            <div className={styles.leftCircleSmall}>
            </div>
            <div className={styles.rightCircle}>
            </div>
            <div className={styles.rightCircleSmall}>
            </div>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.item + ' c-header-link'}>
                        <Link href="/about">私たちについて</Link>
                    </li>
                    <li className={styles.item + ' c-header-link'}>
                        <Link href="/enbu">演舞紹介</Link>
                    </li>
                    <li className={styles.item + ' c-header-link'}>
                        <Link href="/news">お知らせ</Link>
                    </li>
                    <li className={styles.item + ' c-header-link'}>
                        <Link href="/member">メンバー紹介</Link>
                    </li>
                    <li className={styles.item + ' c-header-link'}>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default HeaderNav
