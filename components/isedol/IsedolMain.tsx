import { NextPage } from 'next';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Image from 'next/image';

import styles from '../../styles/components/isedol/isedolMain.module.scss';
import { concatClass } from '../../utils/class';
import Head from 'next/head';
import YouTubePlayerOverlay from '../common/YouTubePlayerOverlay';

const usePageAutoScroll = (
  paused: boolean,
  set: Dispatch<SetStateAction<number>>,
  current: number,
  max: number,
  rate: number
) => {
  useEffect(() => {
    if (paused) {
      return;
    }

    const timeout = setTimeout(() => {
      set(current + 1 > max ? 0 : current + 1);
    }, rate);

    return () => {
      clearTimeout(timeout);
    };
  }, [current, paused]);
};

export const Main: NextPage = () => {
  const [pauseAutoScroll, setPauseAutoScroll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: '/images/bg_rewind.jpg',
      title: 'RE : WIND',
      subtitle: '2021.12.22 MV Released',
      youtube: 'fgSXAKsq-Vo',
      color: '#222121',
    },
    {
      image: '/images/bg_christmas_cover.jpg',
      title: `It's Beginning To Look A Lot Like Christmas`,
      subtitle: '2021.12.23 Christmas Special Cover',
      youtube: 'kNPykP_9wOQ',
      color: '#221511',
    },
  ];

  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [youtubeID, setYoutubeID] = useState<string>('');

  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  usePageAutoScroll(
    openPlayer || pauseAutoScroll,
    setCurrentIndex,
    currentIndex,
    slides.length - 1,
    5000
  );

  return (
    <div className={styles.isedol_main__container}>
      <Head>
        <meta name='theme-color' content={slides[currentIndex].color}></meta>
      </Head>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <div className={styles.background}>
        {slides.map((v, i) => (
          <Image
            className={concatClass(
              styles.backgroundImage,
              currentIndex === i && styles.active
            )}
            layout='fill'
            key={`background-image-${i}`}
            src={v.image}
          />
        ))}
      </div>
      {slides.map((v, i) => (
        <section
          key={`page-${i}`}
          data-current={currentIndex === i}
          className={styles.page}
        >
          <h2 className={styles.isedol_main__title}>{v.title}</h2>
          <div className={styles.isedol_main__subtitle_box}>
            <p className={styles.subtitle}>{v.subtitle}</p>
            {v.youtube && (
              <button
                className={styles.play_btn}
                onClick={() => openYouTube(v.youtube)}
              ></button>
            )}
          </div>
        </section>
      ))}
      <div className={styles.page_indicator}>
        {slides.map((_, i) => (
          <button
            key={`page-indicator-${i}`}
            data-current={currentIndex === i}
            onClick={() => setCurrentIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Main;
