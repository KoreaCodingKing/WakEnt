import { NextPage } from 'next';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import parentStyles from '../styles/pages/index.module.scss';
import styles from '../styles/components/wakenter/WakEnterAbout.module.scss';
import WakEnterMetadata from '../components/wakenter/Meta';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useDynamicPageScroll } from '../components/common/Scroll';

const About: NextPage = () => {
  const [currentLocationY, setCurrentLocationY] = useState<number>(0);

  const sectionInnerRef = useRef<HTMLDivElement>(null);
  const firstSectionCoverRef = useRef<HTMLDivElement>(null);
  const firstSectionDescRef = useRef<HTMLDivElement>(null);
  const firstSectionDescTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionInnerRef.current
      || !firstSectionCoverRef.current
      || !firstSectionDescTitleRef.current
      || !firstSectionDescRef.current) {
      return;
    }

    const sectionInnerRCurrent = sectionInnerRef.current;
    const firstSectionCoverCurrent = firstSectionCoverRef.current;
    const firstSectionDescCurrent = firstSectionDescRef.current;
    const firstSectionDescTitleCurrent = firstSectionDescTitleRef.current;

    const scrollHandler = () => {
      console.log(window.scrollY);
      const locationY = window.scrollY;

      if (locationY <= 2100) {
        firstSectionCoverCurrent.style.transform = `matrix(${locationY/1000}, 0, 0, ${locationY/1000}, 0, 0)`;
        firstSectionDescCurrent.style.opacity = '0';
        // ToDo opacity 타이밍 잡기.
      } else if (locationY > 2100 && locationY <= 2800) {
        firstSectionDescCurrent.style.opacity = '0';
      } else if (locationY > 2800) {
        firstSectionDescCurrent.style.opacity = `${locationY/3186}`;
      }
    };
    sectionInnerRCurrent.addEventListener('scroll', scrollHandler);
    sectionInnerRCurrent.addEventListener('wheel', scrollHandler);

    return () => {
      sectionInnerRCurrent.removeEventListener('scroll', scrollHandler);
      sectionInnerRCurrent.removeEventListener('wheel', scrollHandler);
    };
  }, []);


  // ToDo Scroll.tsx파일로 옮기기.(코드 정리)
  // 현재 firstSection에 대한 내용 처리중. 다른 섹션은 useEffect 추가 Scroll.tsx파일로 옮기기

  return (
    <div ref={sectionInnerRef}>
      <WakEnterMetadata title='About us'></WakEnterMetadata>
      <div className={parentStyles.main}>
        <header>
          <WakEnterHeader></WakEnterHeader>
        </header>
        <div className={styles.about_container}>
          <section className={styles.first_section}>
            <div className={styles.first_section_inner}>
              <div className={styles.video_contents}>
                <div className={styles.video_contents_inner}>
                  <div className={styles.video_cover}
                    ref={firstSectionCoverRef}>
                    <Image src={'/images/temp/진짜로.png'} alt='왁타버스' layout='fill'></Image>
                  </div>
                  <div className={styles.masked}>
                    <div className={styles.inline_video_container}>
                      <div className={styles.inline_video_media}>
                        <Image src={'/images/temp/영국_바스_신호등.png'}
                          layout='fill'
                          placeholder='blur'
                          blurDataURL={'/images/building/bg_introduce_main_img.png'}
                          alt='wakenter about video'></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.about_desc} ref={firstSectionDescRef}>
                <div className={styles.about_desc_inner}>
                  <div className={styles.first_section__img}>
                    <Image
                      src={'/images/building/bg_introduce_main_img.png'}
                      layout='fill'
                      placeholder='blur'
                      blurDataURL={'/images/building/bg_introduce_main_img.png'}
                      alt='왁엔터 사옥'
                    ></Image>
                  </div>
                  <div className={styles.first_section__introduce} ref={firstSectionDescTitleRef}>
                    <h2 className={styles.introduce_title}>Who are we?</h2>
                    <p className={styles.introduce_subtitle}>
                      WAK Entertainment는 인천 송도 왁엔터로에 위치한 엔터테이먼트
                      회사로, 2021년 8월에 설립되어 현재까지 다양한 컨텐츠로 보는
                      이들을 하여금 즐거움을 선사하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.second_section}></section>
          <section className={styles.third_section}></section>
          <section className={styles.fourth_section}></section>
        </div>
      </div>
    </div>
  );
};

export default About;
