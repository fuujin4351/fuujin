import React from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../../libs/client";
import MemberList from "@/components/sections/member/MemberList";
import styles from "@/styles/layout/TopPage.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

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
