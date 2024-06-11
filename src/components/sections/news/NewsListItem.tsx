import React from "react";
import Link from "next/link";
import { News } from "../../../../types/news"; // This line is added to import the News type
import styles from "@/styles/sections/news/NewsItem.module.scss";

type Props = {
  news: News[];
};

export const NewsListItem = (props: Props) => {
  const { news } = props;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 上の段 */}
        <div className={styles.title}>
          <h2 className={styles.title_text}>お知らせ</h2>
        </div>
        {/* 下の段 */}
        <div className={styles.cardlist}>
          {news.map((news: any, index: number) => (
            <Link href={`/news/${news.id}`}>
              <div className={styles.card}>
                <div key={news.id}>
                  <div className={styles.img}>
                    <img
                      src={news.eye_catch.url}
                      alt={news.title}
                      className={styles.img}
                    />
                  </div>
                  <div>
                    <p className={styles.date}>
                      {new Date(news.publishedAt).toLocaleDateString()}
                    </p>
                    <p className={styles.tag}>{news.tag}</p>
                    <p className={styles.Article_title}>{news.title}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
// type NewsItemProps = {
//   news: News;
// };

// const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
//   return (
//     <li key={news.id} className={styles.container}>
//       <Link href={`/news/${news.id}`}>
//         <img
//           src={news.eye_catch.url}
//           alt={news.title}
//           width={200}
//           height={200}
//         />
//         <div>{news.title}</div>
//       </Link>
//     </li>
//   );
// };

export default NewsListItem;
