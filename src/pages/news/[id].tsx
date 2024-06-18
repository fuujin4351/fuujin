import { News } from "../../../types/news";
import { client } from "../../../libs/client";
import styles from "@/styles/sections/news/NewsArticle.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = {
  news: News;
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content: any) => `/news/${content.id}`);

  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};

export default function NewsPage({ news }: Props) {
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
              <img src={news.eye_catch.url} alt="news" className={styles.img} />
            </div>

            <div className={styles.textarea}>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: `${news.body}` }}
              ></div>
            </div>
          </div>

          <div>
            <Link href="/news">
              <button className={styles.button}>一覧に戻る</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
