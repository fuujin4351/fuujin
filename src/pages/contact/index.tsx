import React from "react";
import styles from "@/styles/layout/TopPage.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Contact from "@/components/sections/contact/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function index() {
  return (
    <>
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
