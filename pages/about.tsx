import { NextPage } from 'next';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import parentStyles from '../styles/pages/index.module.scss';
import styles from '../styles/components/wakenter/WakEnterAbout.module.scss';
import WakEnterMetadata from '../components/wakenter/Meta';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useDynamicPageScroll } from '../components/common/Scroll';
import { easeInExpo, easeOutExpo } from '../utils/number';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import Centerize from '../components/common/Centerize';

type scrollHandlersType = ((top: number, height: number) => void)[]

const About: NextPage = () => {
  const descOpacity = useMotionValue(0);
  const coverOpacity = useMotionValue(1);
  const coverScale = useMotionValue(1);

  const [whiteLogo, setWhiteLogo] = useState<boolean>(true);

  /**
   * 페이지가 스크롤 될 때마다 실행될 콜백을 지정합니다.
   * 배열의 각 인덱스는 페이지의 인덱스입니다.
   */
  const scrollHandlers: scrollHandlersType = [
    (top, height) => {
      if (top < height / 2) {
        const desc = (easeOutExpo(top / (height)) * 10) - 9 + 0.3;
        const cover = 0.99 - easeOutExpo((top - height / 10) / (height * 0.75));

        console.log(desc);
        descOpacity.set(desc);
        coverOpacity.set(cover);

        coverScale.set(0.1 + 30 * easeInExpo(top / height));
      }

      setWhiteLogo(top < height / 3);
    },
  ];

  const container = useRef<HTMLDivElement>(null);

  useDynamicPageScroll(container, `.${styles.section}`, 0, {
    debounce: 16,
    callback: pages =>
      pages.forEach(p => {
        const [page, top, height] = p;

        if (scrollHandlers[page]) {
          requestAnimationFrame(() => scrollHandlers[page](top, height));
        }
      }),
  });

  const descSpring = useSpring(descOpacity, { stiffness: 1000, damping: 100 });
  const coverOpacitySpring = useSpring(coverOpacity, { stiffness: 1000, damping: 100 });
  const coverScaleSpring = useSpring(coverScale, { stiffness: 1000, damping: 100 });

  const coverScaleTemplate = useMotionTemplate`scale(${coverScaleSpring})`;

  return (
    <>
      <WakEnterMetadata title='About us'></WakEnterMetadata>
      <div className={parentStyles.main}>
        <header>
          <WakEnterHeader white={whiteLogo}></WakEnterHeader>
        </header>
        <div ref={container}>
          <section className={styles.section} data-index={0}>
            <Centerize>
              <motion.div
                className={styles.video}
                style={{ opacity: coverOpacity }}
              >
                <video autoPlay playsInline muted loop>
                  <source src='/videos/wakenter-full.webm'></source>
                </video>
              </motion.div>
            </Centerize>
            <div className={styles.first_section_inner}>
              <motion.div
                className={styles.video_contents}
                style={{ opacity: coverOpacitySpring }}
              >
                <div className={styles.video_contents_inner}>
                  <motion.div
                    className={styles.video_cover}
                    style={{ transform: coverScaleTemplate }}
                  >
                    <p className={styles.cover}>WAK Entertainment</p>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className={styles.about_desc}
                style={{ opacity: descSpring }}
              >
                <div className={styles.about_desc_inner}>
                  <div className={styles.about_image}>
                    <Image
                      src={'/images/building/bg_introduce_main_img.png'}
                      layout='fill'
                      placeholder='blur'
                      blurDataURL={'/images/building/bg_introduce_main_img.png'}
                      alt='왁엔터 사옥'
                    ></Image>
                  </div>
                  <motion.div
                    className={styles.about_text}
                    style={{ opacity: descOpacity }}>
                    <h2 className={styles.title}>Who are we?</h2>
                    <p className={styles.subtitle}>
                      WAK Entertainment는 인천 송도 왁엔터로에 위치한
                      엔터테이먼트 회사로, 2021년 8월에 설립되어 현재까지 다양한
                      컨텐츠로 보는 이들을 하여금 즐거움을 선사하고 있습니다.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
          <section className={styles.section} data-index={1}></section>
          <section className={styles.section} data-index={2}></section>
          <section className={styles.section} data-index={3}></section>
        </div>
      </div>
    </>
  );
};

export default About;
