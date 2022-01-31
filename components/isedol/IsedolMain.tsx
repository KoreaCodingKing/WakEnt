import { NextPage } from 'next';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import styles from '../../styles/components/isedol/isedolMain.module.scss';
import { concatClass } from '../../utils/class';
import Head from 'next/head';
import YouTubePlayerOverlay from '../common/YouTubePlayerOverlay';
import PageIndicator from '../common/PageIndicator';

const usePageTurner = (
  paused: boolean,
  set: Dispatch<SetStateAction<number>>,
  current: number,
  max: number,
  rate: number
) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      set(current + 1 > max ? 0 : current + 1);
    }, rate);

    return () => {
      clearTimeout(timeout);
    };
  }, [current, max, paused, rate, set]);
};

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

export const Main: NextPage = () => {
  const [pauseAutoScroll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [time, setTime] = useState<NodeJS.Timeout|null>(null);
  const [start, setStart] = useState<number|null>(null);
  const [remain, setRemain] = useState<number|null>(null);

  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [youtubeID, setYoutubeID] = useState<string>('');

  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  const scrollDelay = 7500;
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (start && openPlayer && time) {
      setRemain(Math.abs(Date.now() - start - scrollDelay));
      clearTimeout(time);
      setTime(null);
      return;
    }
    
    setStart(Date.now());
  
    if (start && !openPlayer && remain) {
      setTime(
        setTimeout(() => {
          setCurrentSlide(currentSlide + 1 > slides.length - 1 ? 0 : currentSlide + 1);
        }, remain)
      );
      setRemain(null);
      return;
    }
    
    console.log('scrollDelay', time);
    setTime(
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1 > slides.length - 1 ? 0 : currentSlide + 1);
      }, scrollDelay)
    );

    return () => {
      if (!time) {
        return;
      }
      clearTimeout(time);
    };
  }, [currentSlide, slides.length - 1, openPlayer, scrollDelay, setCurrentSlide]);

  return (
    <div className={styles.isedol_main__container}>
      <Head>
        <meta name='theme-color' content={slides[currentSlide].color}></meta>
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
              currentSlide === i && styles.active
            )}
            blurDataURL={v.image}
            placeholder='blur'
            layout='fill'
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
            data-current={currentSlide === i}
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
          page={currentSlide}
          pageCount={slides.length}
          setPage={to => setCurrentSlide(to)}
          slide={remain ? remain : scrollDelay}
          playSlide={!openPlayer && !pauseAutoScroll}
        ></PageIndicator>
      </div>
    </div>
  );
};

export default Main;
