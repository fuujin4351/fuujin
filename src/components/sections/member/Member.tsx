import { MemList } from "../../../../types/member";
import { client } from "../../../../libs/client";
import Link from "next/link";
import styles from "@/styles/sections/member/Member.module.scss";
import Hero from "@/components/sections/hero/Hero";

type Props = {
  member: MemList;
};

const Member = ({ member }: Props) => {
  const body = member.body;
  return (
    <div className={styles.container}>
      {body.map((member: any, index: number) => (
        <div key={index} className={styles.card}>
          <div className={styles.item}>
            <img src={member.img.url} className={styles.img} alt="memimg" />
            <div className={styles.content}>
              <h1>{member.name}</h1>
              <p>
                <span>{member.cont1}</span>
                <br />
                {member.desc1}
                <br />
                <span>{member.cont2}</span>
                <br />
                {member.desc2}
                <br />
                <span>{member.cont3}</span>
                <br />
                {member.desc3}
                <br />
                <span>ひとこと</span>
                <br />
                {member.comment}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Member;
