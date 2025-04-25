import React from "react";
import styles from "@/styles/sections/top/News.module.scss";
import Image from "next/image";
import Link from "next/link";
import { News } from "../../../../types/news";

type Props = {
  news: News[];
};

export const TopNews = (props: Props) => {
  const { news } = props;
  return (
    <section className={styles.news} id="news">
      <div className={styles.container}>
        <h2 className={styles.title + " c-title2 --bk"}>お知らせ</h2>

        <div className={styles.content}>
          <ul className={styles.list}>
            {news.slice(0, 6).map((news: any, index: number) => (
              <li className={styles.item} key={index}>
                <Link href={`/news/${news.id}`}>
                  <div className={styles.imgArea}>
                    <Image
                      width={300}
                      height={300}
                      src={news.eye_catch.url}
                      alt={news.title}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.textArea}>
                    <p className={styles.date + " c-news-date --gray"}>
                      {new Date(news.publishedAt).toLocaleDateString()}
                    </p>
                    <p className={styles.category + " c-news-category --bk"}>
                      {news.tag}
                    </p>
                    <p className={styles.text + " c-news-text --bk"}>
                      {news.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.buttonArea}>
          <Link className={styles.button + " c-button-text --wh"} href="/news">
            <span className={styles.buttonText}>もっと見る</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopNews;
