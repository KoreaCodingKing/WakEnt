import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import { easeInExpo, easeOutExpo } from '../../../utils/number';
import { concatClass } from '../../../utils/class';

import Centerize from '../../common/Centerize';

import styles from '../../../styles/components/wakenter/AboutPageSections/FirstSection.module.scss';
import { AboutSectionProps } from '../../../pages/about';

const FirstSection = ({
  className,
  current,
  setHeaderWhite,
  onScroll,
}: AboutSectionProps) => {
  /**
   * Ref 값들을 여기서 지정합니다.
   */
  const video = useRef<HTMLVideoElement>(null);

  /**
   * 여기서 motion 값들을 정의합니다.
   */
  const descOpacity = useMotionValue(0);
  const coverOpacity = useMotionValue(1);
  const coverScale = useMotionValue(0.1);

  const descSpring = useSpring(descOpacity, { stiffness: 1000, damping: 100 });
  const coverOpacitySpring = useSpring(coverOpacity, {
    stiffness: 1000,
    damping: 100,
  });
  const coverScaleSpring = useSpring(coverScale, {
    stiffness: 1000,
    damping: 100,
  });

  const coverScaleTemplate = useMotionTemplate`scale(${coverScaleSpring})`;

  /**
   * 스크롤이 발생할 때마다 스크롤 값을 받을 콜백을 지정합니다.
   * 컴포넌트 생성시에 State를 변경하면 오류가 발생하니 useEffect를 사용하여
   * 컴포넌트 생성 후에 호출할 수 있도록 구성했습니다.
   */
  useEffect(() => {
    onScroll(0, (top, height) => {
      if (!current) {
        return;
      }

      const progress = top / height;

      const desc = easeOutExpo(progress) * 10 - 9 + 0.3;
      const cover = 0.99 - easeOutExpo((top - height / 10) / (height * 0.75));

      descOpacity.set(desc);
      coverOpacity.set(cover);

      coverScale.set(0.1 + 30 * easeInExpo(progress));

      setHeaderWhite && setHeaderWhite(top < height / 3);

      if (video.current) {
        if (!video.current.paused && top > window.innerHeight * 1.2) {
          video.current.pause();
        } else if (video.current.paused && top < window.innerHeight * 1.2) {
          video.current.play();
        }
      }
    });
  }, []);

  /**
   * 현재 페이지가 아닌 경우 영상 재생을 멈춥니다.
   */
  useEffect(() => {
    if (!video.current) {
      return;
    }

    video.current[!current ? 'pause' : 'play']();
  }, [current]);

  return (
    <section className={concatClass(className)} data-index={0}>
      <Centerize>
        <motion.div className={styles.video} style={{ opacity: coverOpacity }}>
          <video autoPlay playsInline muted loop ref={video}>
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
            <motion.div className={styles.about_image}>
              <Image
                src={'/images/building/bg_introduce_main_img.png'}
                layout='fill'
                placeholder='blur'
                blurDataURL={'/images/building/bg_introduce_main_img.png'}
                alt='왁엔터 사옥'
              ></Image>
            </motion.div>
            <motion.div
              className={styles.about_text}
              style={{ opacity: descOpacity }}
            >
              <h2 className={styles.title}>Who are we?</h2>
              <p className={styles.subtitle}>
                WAK Entertainment는 인천 송도 왁엔터로에 위치한 엔터테이먼트
                회사로, 2021년 8월에 설립되어 현재까지 다양한 컨텐츠로 보는
                이들을 하여금 즐거움을 선사하고 있습니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
