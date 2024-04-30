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
import Head from "next/head";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const headData = {
  title: "お知らせ | 千葉工業大学よさこいソーラン風神部",
  description: "千葉工業大学のよさこいソーランサークル、風神部のお知らせページです。風神部のお知らせを掲載しています。",
  keywords: "千葉工業大学, よさこい, ソーラン, 風神部, 風神魂, 風神, cit, サークル, 大学, よさこいソーラン, サークル活動, お知らせ, お知らせ一覧, お知らせ情報, お知らせ告知, お知らせ開催, お知らせ開催情報, お知らせ開催告知",
  ogUrl: "https://fuujin4351/news/"
}

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
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
        <meta name="keywords" content={headData.keywords}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={headData.title}/>
        <meta property="og:description" content={headData.description}/>
        <meta property="og:url" content={headData.ogUrl} />
      </Head>
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
