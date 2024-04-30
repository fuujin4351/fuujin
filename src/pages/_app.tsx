// 例えば、ページ間で共有されるナビゲーションバーやフッター、グローバルCSS、または状態管理ロジックなどをここに配置することができる

import "@/styles/globals.scss";
import "@/styles/normalize.scss";
import "@/styles/mixin.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        ></link>
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
        ></link>
        <link rel="icon" href="/favicon/favicon.png"></link>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:image" content="/ogp.png"/>
        <meta property="og:image:secure_url" content="/ogp.png"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(d) {
            var config = {
              kitId: 'cro5gvm',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
