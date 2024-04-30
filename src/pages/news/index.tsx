// import styles from "@/styles/news/NewsItem.module.css";
import { client } from "../../../libs/client";
import type { News } from "../../../types/news";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import NewsListItem from "@/components/sections/news/NewsListItem"; // 新しく追加
import Hero from "@/components/sections/hero/Hero"; // 新しく追加
import styles from "@/styles/layout/TopPage.module.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });
  return {
    props: {
      news: data.contents,
    },
  };
};

const NewsList: NextPage<Props> = ({ news }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Hero />
        <NewsListItem news={news} />
      </main>
      <Footer />
    </>
  );
};

// //SSG
// export const getStaticProps = async () => {
//   const news = await client.get({ endpoint: "news" });

//   return {
//     props: {
//       news: news.contents,
//     },
//   };
// };

// type Props = {
//   news: News[];
// };

// const News: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
//   news,
// }: Props) => {
//   return (
//     <div>
//       <div>お知らせ</div>
//       <ul>
//         {news.map((news) => (
//           <NewsListItem key={news.id} news={news} /> // NewsItemコンポーネントを使用
//         ))}
//       </ul>
//     </div>
//   );
// };

export default NewsList;
