import React from "react";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Title from "@/components/sections/about/Title";
import Intro from "@/components/sections/about/Intro";
import Work from "@/components/sections/about/Work";
import Home from "@/components/sections/about/Home";
import Award from "@/components/sections/about/Award";
import styles from "@/styles/layout/TopPage.module.scss";

const about = () => {
  return (
    <>
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
