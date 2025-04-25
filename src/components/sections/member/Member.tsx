import { MemList } from "../../../../types/member";
import styles from "@/styles/sections/member/Member.module.scss";
import Image from "next/image";

type MemberBody = {
  img: {
    url: string;
  };
  name: string;
  cont1: string;
  desc1: string;
  cont2: string;
  desc2: string;
  cont3: string;
  desc3: string;
  comment: string;
};

type Props = {
  member: {
    body: MemberBody[];
  };
};

const Member = ({ member }: Props) => {
  const body = member.body;

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {body.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.item}>
              <Image
                width={300}
                height={300}
                src={member.img.url}
                className={styles.img}
                alt={`${member.name}`}
              />
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
    </div>
  );
};

export default Member;
