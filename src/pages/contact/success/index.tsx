import React from "react";
import Success from "@/components/sections/contact/Success";
import Hero from "@/components/sections/hero/Hero";
import styles from "@/styles/layout/TopPage.module.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const index = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Hero />
        <Success />
      </div>
      <Footer />
    </>
  );
};

export default index;
