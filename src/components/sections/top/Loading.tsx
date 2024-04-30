import React from 'react'
import Image from 'next/image'
import styles from '@/styles/sections/top/Loading.module.scss'

function Loading() {
  return (
    <div className={styles.container + ' --fadeIn'}>
        <div className={styles.bg}>
            <div className={styles.imgArea}>
                <Image
                    src="/common/logo.png"
                    alt="Your Image"
                    className={styles.img}
                    width={200}
                    height={200}
                />
            </div>
            <p className={styles.text + ' c-footer-title'}>千葉工業大学 よさこいソーラン風神部</p>
        </div>
    </div>
  )
}

export default Loading
