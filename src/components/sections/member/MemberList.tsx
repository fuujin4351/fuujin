import React from "react";
import { MemList } from "../../../../types/member"; // 確認してください
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
        {members.map((post, postIndex) => (
          <div className={styles.card} key={postIndex}>
            <Link href={`/member/${post.id}`} className={styles.link}>
              <img src={post.eyecatch.url} alt="" className={styles.image} />

              <div className={styles.content}>
                <p className={styles.title}>{post.title}</p>
                <p className={styles.tag}>{post.tag}</p>
                <p className={styles.tag}>{post.comment}</p>
              </div>
            </Link>
          </div>
        ))}
        <Link
          href="https://yosakoifuujin.tuzikaze.com/member.html"
          className={styles.btn}
        >
          <p className={styles.past}>16代目以降のメンバーはこちら</p>
        </Link>
      </div>
    </section>
  );
};

export default MemberList;
