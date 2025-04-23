// "use client";
// import { useEffect } from "react";
// import Script from "next/script";

// export const Twitter = () => {
//   useEffect(() => {
//     if ((window as any).twttr?.widgets) {
//       (window as any).twttr.widgets.load();
//     }
//   }, []);

//   return (
//     <>
//       <a
//         className="twitter-timeline"
//         data-width="500"
//         data-height="600"
//         href="https://twitter.com/fujin_4351_tw?ref_src=twsrc%5Etfw"
//       >
//         Tweets by fujin_4351_tw
//       </a>
//       <Script
//         src="https://platform.twitter.com/widgets.js"
//         strategy="afterInteractive"
//       />
//     </>
//   );
// };
