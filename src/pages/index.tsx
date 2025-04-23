// "use client";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/layout/TopPage.module.scss";
import Mv from "@/components/sections/top/Mv";
import Gallery from "@/components/sections/top/Gallery";
import Message from "@/components/sections/top/Message";
import Circle from "@/components/sections/top/Circle";
import Enbu from "@/components/sections/top/Enbu";
import TopNews from "@/components/sections/top/News";
import Sns from "@/components/sections/top/Sns";
import We from "@/components/sections/top/We";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../libs/client";
import { useEffect, useState } from "react";
import Loading from "@/components/sections/top/Loading";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const headData = {
  title: "千葉工業大学よさこいソーラン風神部 | あふれんばかりの風神魂",
  description:
    "千葉工業大学のよさこいソーランサークル、風神部の公式サイトです。風神部の活動やイベント情報、サークル紹介などを掲載しています。",
  keywords:
    "千葉工業大学, よさこい, ソーラン, 風神部, 風神魂, 風神, cit, サークル, 大学, よさこいソーラン, サークル活動, サークル紹介, サークル勧誘, サークル募集, サークルイベント, サークルイベント情報, サークルイベント告知, サークルイベント開催, サークルイベント開催情報, サークルイベント開催告知",
  ogUrl: "https://fuujin4351",
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });
  return {
    props: {
      news: data.contents,
    },
  };
};
const Home: NextPage<Props> = ({ news }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
        <meta name="keywords" content={headData.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={headData.title} />
        <meta property="og:description" content={headData.description} />
        <meta property="og:url" content={headData.ogUrl} />
      </Head>

      <div className={styles.top}>
        {/* {isLoading && <Loading />} */}
        <Header />
        <main>
          <div className={styles.container}>
            <Mv />
            <Gallery />
            <Message />
            <Circle />
            <Enbu />
            <TopNews news={news} />
            <Sns />
            <We />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Home;
