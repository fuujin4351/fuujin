import React from "react";
import Hero from "@/components/sections/hero/Hero";
import Confirm from "@/components/sections/contact/Confirm";
import styles from "@/styles/layout/TopPage.module.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const index = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Hero />
        <Confirm />
      </div>
      <Footer />
    </>
  );
};

export default index;
