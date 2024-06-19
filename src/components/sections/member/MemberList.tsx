import React from "react";
import { MemList } from "../../../../types/member"; // 型の確認
import Link from "next/link";
import styles from "@/styles/sections/member/MemberList.module.scss";

type Props = {
  members: MemList[];
};

const MemberList = ({ members }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>メンバー紹介</h1>
        {members.map((post) => (
          <div className={styles.card} key={post.id}>
            <Link href={`/member/${post.id}`} passHref>
              <div className={styles.link}>
                <img
                  src={post.eyecatch.url}
                  alt={post.title}
                  className={styles.image}
                />
                <div className={styles.content}>
                  <p className={styles.title}>{post.title}</p>
                  <p className={styles.tag}>{post.tag}</p>
                  <p className={styles.tag}>{post.comment}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <Link href="https://yosakoifuujin.tuzikaze.com/member.html" passHref>
          <div className={styles.btn}>
            <p className={styles.past}>16代目以降のメンバーはこちら</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MemberList;
