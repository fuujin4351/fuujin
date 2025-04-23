import "@/styles/globals.scss";
import "@/styles/normalize.scss";
import "@/styles/mixin.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script"; // next/script をインポートします

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" href="/favicon/favicon.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:image" content="https://fuujin4351.com/ogp.png" />
        <meta
          property="og:image:secure_url"
          content="https://fuujin4351.com/ogp.png"
        />
        {/* メタタイトル */}
        <meta
          name="title"
          content="千葉工業大学よさこいソーラン風神部 | あふれんばかりの風神魂"
        />
        {/* メタディスクリプション */}
        <meta
          name="description"
          content="千葉工業大学のよさこいソーランサークル、風神部の公式サイトです。風神部の活動やイベント情報、サークル紹介などを掲載しています。"
        />
      </Head>
      <Script strategy="lazyOnload">
        {" "}
        {/* スクリプトを遅延読み込みで設定 */}
        {`
          (function(d) {
            var config = {
              kitId: 'cro5gvm',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
