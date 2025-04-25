import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { News } from "../../../types/news";
import { client } from "../../../libs/client";
import styles from "@/styles/sections/news/NewsArticle.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

type Props = {
  news: News;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content: any) => `/news/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string;
  try {
    const data = await client.get({ endpoint: "news", contentId: id });

    return {
      props: {
        news: data,
      },
    };
  } catch (error) {
    console.error("Error fetching news data:", error);
    return {
      notFound: true,
    };
  }
};

const NewsPage: NextPage<Props> = ({ news }) => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <Hero />
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>{news.title}</h1>
          </div>

          <div>
            <div className={styles.imgarea}>
              <Image
                width={600}
                height={400}
                src={news.eye_catch.url}
                alt="news"
                className={styles.img}
              />
            </div>

            <div className={styles.textarea}>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: `${news.body}` }}
              ></div>
            </div>
          </div>

          <div>
            <Link href="/news" passHref>
              <button className={styles.button}>一覧に戻る</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewsPage;
