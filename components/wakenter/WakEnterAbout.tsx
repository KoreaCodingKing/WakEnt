import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/components/wakenter/WakEnterAbout.module.scss';
import { NextPage } from 'next';

export const WakEnterAbout: NextPage = () => {
  const [currentLocationY, setCurrentLocationY] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const firstSectionImageRef = useRef<HTMLDivElement>(null);

  // ToDo Scroll.tsx파일로 옮기기.
  // 현재 firstSection에 대한 내용 처리중. 다른 섹션은 useEffect 추가 Scroll.tsx파일로 옮기기
  useEffect(() => {
    console.log(1);
    if (!process.browser) {
      console.log(2);
      return;
    }
    if (!firstSectionRef.current || !firstSectionImageRef.current || !containerRef.current) {
      console.log(3);
      return;
    }

    const firstSectionCurrent = firstSectionRef.current;
    const firstSectionImageCurrent = firstSectionImageRef.current;
    const containerCurrent = containerRef.current;
    const {bottom} = firstSectionCurrent.getBoundingClientRect();

    const scrollHandler = () => {
      setCurrentLocationY(window.scrollY);
      if(currentLocationY > bottom / 2) {
        firstSectionImageCurrent.style.transform = `translateX(100% - ${currentLocationY - (bottom / 2)}%)`;
        firstSectionImageCurrent.style.opacity = `${currentLocationY / bottom/2}`;
      } else if (currentLocationY < bottom / 2) {
        firstSectionImageCurrent.style.transform = `translateX(${currentLocationY - (bottom / 2)}% - 100%)`;
        firstSectionImageCurrent.style.opacity = `${bottom/2 / currentLocationY}`;
      }
    };

    containerCurrent.addEventListener('scroll', scrollHandler);
    containerCurrent.addEventListener('wheel', scrollHandler);

    return () => {
      containerCurrent.removeEventListener('scroll', scrollHandler);
      containerCurrent.removeEventListener('wheel', scrollHandler);
    };
  }, []);

  return (
    <div className={styles.about_container} ref={containerRef}>
      <section className={styles.first_section} ref={firstSectionRef}>
        <div className={styles.first_section__img} ref={firstSectionImageRef}>
          <Image src={'/images/building/bg_introduce_main_img.png'}
            layout='fill'
            placeholder='blur'
            blurDataURL={'/images/building/bg_introduce_main_img.png'}
            alt='왁엔터 사옥'
          ></Image>
        </div>
        <div className={styles.first_section__introduce}>
          <h2 className={styles.introduce_title}>Who are we?</h2>
          <p className={styles.introduce_subtitle}>WAK Entertainment는 인천 송도 왁엔터로에 위치한 엔터테이먼트 회사로, 2021년 8월에 설립되어 현재까지 다양한 컨텐츠로 보는 이들을 하여금 즐거움을 선사하고 있습니다.</p>
        </div>
      </section>
      <section className={styles.second_section}></section>
      <section className={styles.third_section}></section>
      <section className={styles.fourth_section}></section>
    </div>
  );
};

export default WakEnterAbout;