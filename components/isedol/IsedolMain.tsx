import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import styles from '../../styles/components/isedol/isedolMain.module.scss';

export const Main: NextPage = () => {
  // ToDo: 클릭때마다 setCurrentIndex로 currentIndex 변경
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: '/images/bg_rewind.jpg',
      title: 'RE : WIND',
      subtitle: '2021.12.22 MV Released',
      youtube: 'fgSXAKsq-Vo'
    },
    {
      image: '/images/bg_christmas_cover.jpg',
      title: `It's Beginning To Look A Lot Like Christmas`,
      subtitle: '2021.12.23 christmas special cover',
      youtube: 'kNPykP_9wOQ',
    },
  ];

  /**
   * TODO : 재생 버튼을 누르면 YouTube 플레이어 열기 (이동이 아님!)
   * TODO : 페이지 전환 트렌지션
   */

  return (
    <div className={styles.isedol_main__container}>
      <div className={styles.background}>
        <Image layout='fill' src={slides[currentIndex].image} />
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
            {
              v.youtube && <button className={styles.play_btn}></button>
            }
          </div>
        </section>
      ))}
      <div className={styles.page_indicator}>
        {slides.map((_, i) => (
          <button
            data-current={currentIndex === i}
            onClick={() => setCurrentIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Main;
