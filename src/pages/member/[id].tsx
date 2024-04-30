import { client } from "../../../libs/client";
import Link from "next/link";
import styles from "@/styles/sections/member/Member.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Member from "@/components/sections/member/Member";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "member" });

  const paths = data.contents.map((content: any) => `/member/${content.id}`);

  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "member", contentId: id });

  return {
    props: {
      member: data,
    },
  };
};
const MemberList: NextPage<Props> = ({ member }) => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <Hero />
        <Member member={member} />
        <div className={styles.btn}>
          <Link href="/member">
            <button>一覧へ戻る</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default MemberList;
