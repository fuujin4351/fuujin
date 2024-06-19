import { client } from "../../../libs/client";
import Link from "next/link";
import styles from "@/styles/layout/TopPage.module.scss";
import Hero from "@/components/sections/hero/Hero";
import Member from "@/components/sections/member/Member";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  NextPage,
} from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "member" });

  const paths = data.contents.map((content: any) => `/member/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  try {
    const data = await client.get({ endpoint: "member", contentId: id });

    return {
      props: {
        member: data,
      },
    };
  } catch (error) {
    console.error("Error fetching member data:", error);
    return {
      notFound: true,
    };
  }
};

const MemberList: NextPage<Props> = ({ member }) => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <Hero />
        <Member member={member} />
        <div className={styles.btn}>
          <Link href="/member" passHref>
            <button>一覧へ戻る</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MemberList;
