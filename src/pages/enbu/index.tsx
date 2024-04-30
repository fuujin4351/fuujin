import React from "react";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Title from "@/components/sections/enbu/Title";
import Card from "@/components/sections/enbu/Card";
import styles from "@/styles/layout/TopPage.module.scss";
import Head from "next/head";

const headData = {
  title: "演舞紹介 | 千葉工業大学よさこいソーラン風神部",
  description: "千葉工業大学のよさこいソーランサークル、風神部の演舞紹介ページです。風神部の演舞を紹介しています。",
  keywords: "千葉工業大学, よさこい, ソーラン, 風神部, 風神魂, 風神, cit, サークル, 大学, よさこいソーラン, サークル活動, 演舞, 演舞紹介, 演舞募集, 演舞イベント, 歴代演舞, 歴代演舞紹介, 歴代演舞募集, 歴代演舞イベント",
  ogUrl: "https://fuujin4351/enbu/"
}

const index = () => {
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
        <Title />
        <Card />
      </main>
      <Footer />
    </>
  );
};

export default index;
