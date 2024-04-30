import React from 'react'
import styles from '@/styles/layout/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer} id='footer'>
        <div className={styles.circle}>
        </div>
        <div className={styles.circleSmall}>
        </div>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.titleArea}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image
                    src="/common/logo.png"
                    alt="風神部ロゴ"
                    className={styles.img}
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <p className={styles.title + ' c-footer-title'}>千葉工業大学 よさこいソーラン風神部</p>
            </div>
            <ul className={styles.nav}>
              <li className={styles.item + ' c-footer-link'}>
                <Link href="/about">私たちについて</Link>
              </li>
              <li className={styles.item + ' c-footer-link'}>
                <Link href="/enbu">演舞紹介</Link>
              </li>
              <li className={styles.item + ' c-footer-link'}>
                <Link href="/news">お知らせ</Link>
              </li>
              <li className={styles.item + ' c-footer-link'}>
                <Link href="/member">メンバー紹介</Link>
              </li>
              <li className={styles.item + ' c-footer-link'}>
                <Link href="/contact">お問い合わせ</Link>
              </li>
            </ul>
          </div>

          <div className={styles.copyArea}>
            <p className={styles.copy + ' c-footer-copy'}>©︎ 2024 千葉工業大学 よさこいソーラン風神部</p>
          </div>

        </div>
    </footer>
  )
}

export default Footer
