import React from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../../libs/client";
import MemberList from "@/components/sections/member/MemberList";
import styles from "@/styles/layout/TopPage.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const headData = {
  title: "メンバー紹介 | 千葉工業大学よさこいソーラン風神部",
  description: "千葉工業大学のよさこいソーランサークル、風神部のメンバー紹介ページです。風神部のメンバーを紹介しています。",
  keywords: "千葉工業大学, よさこい, ソーラン, 風神部, 風神魂, 風神, cit, サークル, 大学, よさこいソーラン, サークル活動, メンバー, メンバー紹介, メンバー募集",
  ogUrl: "https://fuujin4351/menber/"
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "member" });
  return {
    props: {
      member: data.contents,
    },
  };
};

const Member: NextPage<Props> = ({ member }) => {
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
      <div className={styles.container}>
        <Hero />
        <MemberList members={member} />
      </div>
      <Footer />
    </>
  );
};

export default Member;
