import { NextPage } from "next";
import { useRef, useState } from "react";

import Image from "next/image";

import styles from "../../styles/components/isedol/isedolMain.module.scss";
import { classes } from "../../utils/class";
import Head from "next/head";
import YouTubePlayerOverlay from "../common/YouTubePlayerOverlay";
import PageIndicator from "../common/PageIndicator";
import { usePageTurner } from "../../utils/state";

const slides = [
  {
    image: "/images/gosegu-down.png",
    title: "겨울봄",
    subtitle: "2022.03.11 MV Released",
    youtube: "JY-gJkMuJ94",
    color: "#222121",
  },
  {
    image: "/images/bg_rewind.jpg",
    title: "RE : WIND",
    subtitle: "2021.12.22 MV Released",
    youtube: "fgSXAKsq-Vo",
    color: "#222121",
  },
  // {
  //   image: '/images/bg_christmas_cover.jpg',
  //   title: `It's Beginning To Look A Lot Like Christmas`,
  //   subtitle: '2021.12.23 Christmas Special Cover',
  //   youtube: 'kNPykP_9wOQ',
  //   color: '#221511',
  // },
];

const slideRate = 7500;

export const Main: NextPage = () => {
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [youtubeID, setYoutubeID] = useState<string>("");

  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  const slidesRef = useRef<HTMLDivElement>(null);

  const [slide, setSlide] = usePageTurner(
    openPlayer,
    slides.length - 1,
    slideRate
  );

  return (
    <div className={styles.isedol_main__container}>
      <Head>
        <meta name="theme-color" content={slides[slide].color}></meta>
      </Head>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <div className={styles.background}>
        {slides.map((v, i) => (
          <Image
            className={classes(
              styles.backgroundImage,
              slide === i && styles.active
            )}
            blurDataURL={v.image}
            placeholder="blur"
            layout="fill"
            priority
            key={`background-image-${i}`}
            src={v.image}
          />
        ))}
      </div>
      <div className={styles.slides} ref={slidesRef}>
        {slides.map((v, i) => (
          <section
            key={`page-${i}`}
            data-current={slide === i}
            className={styles.page}
          >
            <div className={styles.contents}>
              <h2 className={styles.title}>{v.title}</h2>
              <div className={styles.subtitleBox}>
                <p className={styles.subtitle}>{v.subtitle}</p>
                {v.youtube && (
                  <button
                    className={styles.play_btn}
                    onClick={() => openYouTube(v.youtube)}
                  ></button>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className={styles.page_indicator}>
        <PageIndicator
          paused={openPlayer}
          page={slide}
          pageCount={slides.length}
          setPage={(to) => setSlide(to)}
          slide={slideRate}
        ></PageIndicator>
      </div>
    </div>
  );
};

export default Main;
