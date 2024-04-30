import React from 'react'
import styles from '@/styles/sections/top/Sns.module.scss'
import { Twitter } from '@/components/elements/Twitter'

function Sns() {
  return (
    <section className={styles.sns} id='sns'>
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <h2 className={styles.title + ' c-title2 --bk'}>公式SNS</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.snsArea}>
                    <p className={styles.snsTitle + ' c-sns-title'}>Twitter</p>
                    <Twitter />
                </div>
                <div className={styles.snsArea}>
                    <p className={styles.snsTitle + ' c-sns-title'}>Youtube</p>
                    <iframe width="560" height="400" src="https://www.youtube.com/embed/S8Ih0jG0a98?si=L4N5b5I7TNDZHS7D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sns
