import React from "react";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Title from "@/components/sections/about/Title";
import Intro from "@/components/sections/about/Intro";
import Work from "@/components/sections/about/Work";
import Award from "@/components/sections/about/Award";
import styles from "@/styles/layout/TopPage.module.scss";
import Head from "next/head";

const headData = {
  title: "私たちについて | 千葉工業大学よさこいソーラン風神部",
  description:
    "千葉工業大学のよさこいソーランサークル、風神部についての紹介ページです。風神部の活動内容や歴史、受賞歴などを紹介しています。",
  keywords:
    "千葉工業大学, よさこい, ソーラン, 風神部, 風神魂, 風神, cit, サークル, 大学, よさこいソーラン, サークル活動, 私たちについて, 私たちの活動, 私たちの歴史, 私たちの受賞歴, 私たちの紹介, 私たちの活動内容, 私たちの歴史紹介, 私たちの受賞歴紹介, 私たちの紹介ページ, 私たちの活動内容紹介, 私たちの歴史紹介ページ, 私たちの受賞歴紹介ページ",
  ogUrl: "https://fuujin4351/about/",
};

const about = () => {
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
      <Header />
      <main>
        <div className={styles.container}>
          <Hero />
          <Title />
          <Intro />
          <Work />
          <Award />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default about;
