import React from "react";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Title from "@/components/sections/enbu/Title";
import Card from "@/components/sections/enbu/Card";
import styles from "@/styles/layout/TopPage.module.scss";

const index = () => {
  return (
    <>
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
