export default function microcmsImageLoader({
  src,
  quality = 75,
  format = "webp",
  width,
  height,
}: {
  src: string;
  quality?: number;
  format?: string;
  width?: number;
  height?: number;
}) {
  // microCMSの画像URLの場合のみ変換
  if (!src.includes("images.microcms-assets.io")) {
    return src;
  }

  // 複数の '?' を '&' に置換して正規化（先頭の '?' は残す）
  const [base, query] = src.split("?");
  let normalizedQuery = query || "";
  // もし query 内にさらに '?' が含まれているなら、それを '&' に置換
  normalizedQuery = normalizedQuery.replace(/\?/g, "&");

  const normalizedSrc = `${base}?${normalizedQuery}`;

  // URL オブジェクトを生成
  const url = new URL(normalizedSrc);
  const params = new URLSearchParams(url.search);

  // 画質 (q) とフォーマット (fm) のパラメータを追加または上書き
  params.set("q", quality.toString());
  params.set("fm", format);

  // width, height が指定されている場合は上書き
  if (width) params.set("w", width.toString());
  if (height) params.set("h", height.toString());

  // 新しいクエリパラメータをURLに設定
  url.search = params.toString();
  return url.toString();
}
