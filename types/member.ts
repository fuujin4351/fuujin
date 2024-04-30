// 画像を表す型
export type Image = {
  url: string;
  height: number;
  width: number;
};

// メンバー情報を表す型
export type Member = {
  fieldId: "member";
  img: Image;
  name: string;
  cont1: string;
  desc1: string;
  cont2: string;
  desc2: string;
  cont3: string;
  desc3: string;
  comment: string;
};

// ブログポスト全体を表す型
export type MemList = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  eyecatch: Image;
  comment: string;
  tag: string;
  body: Member[];
};
