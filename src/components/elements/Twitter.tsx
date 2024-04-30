"use client";
import Script from "next/script";

export const Twitter = () => {
    return (
        <>
            <a className="twitter-timeline" data-width="500" data-height="400" href="https://twitter.com/fujin_4351_tw?ref_src=twsrc%5Etfw">
                Tweets by fujin_4351_tw
            </a>
            <Script async src="https://platform.twitter.com/widgets.js"></Script>
        </>
    );
};
