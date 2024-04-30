import React from "react";
import styles from "@/styles/layout/TopPage.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Contact from "@/components/sections/contact/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

const headData = {
  title: "お問い合わせ | 千葉工業大学よさこいソーラン風神部",
  description: "千葉工業大学のよさこいソーランサークル、風神部のお問い合わせページです。風神部へのお問い合わせはこちらから。",
  keywords: "千葉工業大学, よさこい, ソーラン, 風神部, 風神魂, 風神, cit, サークル, 大学, よさこいソーラン, サークル活動, お問い合わせ, お問い合わせフォーム, お問い合わせ先, お問い合わせ方法, お問い合わせ内容, お問い合わせ送信, お問い合わせ送信方法, お問い合わせ送信先, お問い合わせ送信内容",
  ogUrl: "https://fuujin4351/contact/"
}

function index() {
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default index;
