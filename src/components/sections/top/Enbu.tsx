import React from "react";
import styles from "@/styles/sections/top/Enbu.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { enbuList } from "@/components/sections/enbu/enbuData";

function Enbu() {
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <section className={styles.enbu} id="enbu">
      <div className={styles.container}>
        <div className={styles.leftCircle}></div>
        <div className={styles.leftCircleSmall}></div>
        <div className={styles.textArea}>
          <h2 className={styles.title + " c-title2 --bk"}>演舞紹介</h2>
          <p className={styles.text + " c-body1 --bk"}>
            よさこいの演舞とは、代ごとに決めたテーマに基づいてオリジナル曲や振付を創作し、自ら衣装を作成するパフォーマンスです。私たちのチームは、創造力とチームワークを活かし、独自の個性を表現しています。
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={slideSettings} // slidesPerViewを指定
          slidesPerView={"auto"} // ハイドレーションエラー対策
          centeredSlides={true} // スライドを中央に配置
          loop={true} // スライドをループさせる
          speed={1000} // スライドが切り替わる時の速度
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }} // スライド表示時間
          navigation // ナビゲーション（左右の矢印）
          pagination={{
            clickable: true,
          }} // ページネーション, クリックで対象のスライドに切り替わる
          className={styles.slideWrapper}
        >
          {enbuList.slice(0, 5).map((enbu, index) => (
            <SwiperSlide className={styles.imgArea} key={index}>
              <Link href={"/enbu#" + enbu.year}>
                <Image
                  src={enbu.img}
                  width={1920}
                  height={1038}
                  alt="Slider Image"
                  className={styles.img + " slider-img"}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttonArea}>
          <Link className={styles.button + " c-button-text --wh"} href="/enbu">
            <span className={styles.buttonText}>歴代演舞はこちら！</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Enbu;
