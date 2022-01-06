import { NextPage } from 'next';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import parentStyles from '../styles/pages/index.module.scss';
import styles from '../styles/components/wakenter/WakEnterAbout.module.scss';
import WakEnterMetadata from '../components/wakenter/Meta';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useDynamicPageScroll } from '../components/common/Scroll';
import { clamp, easeOutExpo, threshold } from '../utils/number';
import { motion } from 'framer-motion';

type scrollHandlersType = ((top: number, height: number) => void)[]

const About: NextPage = () => {
  const firstSection = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  const [descOpacity, setDescOpacity] = useState<number>(0);
  const [coverMatrix, setCoverMatrix] = useState<number>(0.5);

  /**
   * 페이지가 스크롤 될 때마다 실행될 콜백을 지정합니다.
   * 배열의 각 인덱스는 페이지의 인덱스입니다.
   */
  const scrollHandlers: scrollHandlersType = [
    (top, height) => {
      /**
       * FIXME : 변수 명은 알아볼 수 있으면 좋습니다. setProperty 성능 문제도 개선하기
       */

      setDescOpacity(easeOutExpo(clamp(top / (height * 0.75), 0, 1)));
      setCoverMatrix(top);

      const descTop = descRef.current!.offsetTop;
      const descTopThreshold = threshold(descTop, 0.05);

      descRef.current!.style.setProperty(
        '--image-opacity',
        `${clamp((top - descTopThreshold) / (window.innerHeight * 0.07), 0, 1)}`
      );
    }
  ];

  const aboutContainer = useRef<HTMLDivElement>(null);

  useDynamicPageScroll(aboutContainer, `.${styles.section}`, 0, pages =>
    pages.forEach(p => {
      const [page, top, height] = p;

      if (scrollHandlers[page]) {
        scrollHandlers[page](top, height);
      }
    })
  );

  return (
    <>
      <WakEnterMetadata title='About us'></WakEnterMetadata>
      <div className={parentStyles.main}>
        <header>
          <WakEnterHeader></WakEnterHeader>
        </header>
        <div className={styles.about_container} ref={aboutContainer}>
          <section className={styles.section} data-index={0} ref={firstSection}>
            <div className={styles.first_section_inner}>
              <div className={styles.video_contents}>
                <div className={styles.video_contents_inner}>
                  <motion.div
                    className={styles.video_cover}
                    ref={coverRef}
                    animate={{
                      transform: `matrix(${coverMatrix+0.5}, 0, 0, ${coverMatrix+0.5}, 0, 0)`,
                    }}
                    transition={{ type: 'tween' }}
                  >
                    <p className={styles.cover}>WAK Entertainment</p>
                  </motion.div>
                  <div className={styles.masked}>
                    <div className={styles.inline_video_container}>
                      <div className={styles.inline_video_media}>
                        {/* ToDo: 이미지 삽입 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                className={styles.about_desc}
                ref={descRef}
                animate={{ opacity: descOpacity }}
                transition={{ type: 'spring', stiffness: 200 }}
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
                  <div className={styles.about_text}>
                    <h2 className={styles.title}>Who are we?</h2>
                    <p className={styles.subtitle}>
                      WAK Entertainment는 인천 송도 왁엔터로에 위치한
                      엔터테이먼트 회사로, 2021년 8월에 설립되어 현재까지 다양한
                      컨텐츠로 보는 이들을 하여금 즐거움을 선사하고 있습니다.
                    </p>
                  </div>
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
