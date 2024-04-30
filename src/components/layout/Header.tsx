import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/layout/Header.module.scss'
import HeaderButton from '@/components/elements/HeaderButton'
import HeaderNav from '../elements/HeaderNav'
import Link from 'next/link'

function Header() {
    const [active, setActive] = useState(false)

  return (
    <header className={styles.header} id='header'>
        <div className={styles.container}>
            <Link href="/">
                <div className={styles.titleArea}>
                    <div className={styles.logo}>
                        <Image
                            src="/common/logo.png"
                            alt="Your Image"
                            className={styles.img}
                            width={200}
                            height={200}
                        />
                    </div>
                    <p className={styles.title + ' bk c-header-title'} >千葉工業大学<br />よさこいソーラン風神部</p>
                </div>
            </Link>
            <HeaderButton active={ active } setActive={setActive} />
            <HeaderNav active={ active } />
        </div>
    </header>
  )
}

export default Header
