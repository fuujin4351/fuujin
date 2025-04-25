import React from "react";
import Link from "next/link";
import { News } from "../../../../types/news"; // This line is added to import the News type
import styles from "@/styles/sections/news/NewsItem.module.scss";
import Image from "next/image";

type Props = {
  news: News[];
};

export const NewsListItem: React.FC<Props> = ({ news }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 上の段 */}
        <div className={styles.title}>
          <h2 className={styles.title_text}>お知らせ</h2>
        </div>
        {/* 下の段 */}
        <div className={styles.cardlist}>
          {news.map((newsItem) => (
            <Link href={`/news/${newsItem.id}`} key={newsItem.id}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <Image
                    width={300}
                    height={300}
                    src={newsItem.eye_catch.url}
                    alt={newsItem.title}
                    className={styles.img}
                  />
                </div>
                <div>
                  <p className={styles.date}>
                    {new Date(newsItem.publishedAt).toLocaleDateString()}
                  </p>
                  <p className={styles.tag}>{newsItem.tag}</p>
                  <p className={styles.Article_title}>{newsItem.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsListItem;
