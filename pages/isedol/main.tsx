import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

import styles from '../../styles/components/isedol/isedolMain.module.scss';

export const Main: NextPage = () => {
  // ToDo: 클릭때마다 setCurrentIndex로 currentIndex 변경
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slides = [
    {
      image: '/images/bg_rewind.jpg',
      title: 'RE : WIND',
      subtitle: '2021.12.22 MV Released',
    },
  ];

  return (
    <div
      className={styles.isedol_main__container}
      style={{ backgroundImage: `url(${slides[currentIndex]})` }}
    >
      <h2 className={styles.isedol_main__title}>
        RE<span>:</span>WIND
      </h2>
      <div className={styles.isedol_main__subtitle_box}>
        <p className={styles.subtitle}></p>
        <button className={styles.play_btn}></button>
      </div>
      <div className={styles.isedol_main__slide_box}>
        {/* ToDo: backgroundImagesPath length마다 버튼 보여주깅~ */}
        <button className={styles.selected}></button>
        <button></button>
      </div>
    </div>
  );
};

export default Main;
