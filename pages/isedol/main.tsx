import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/isedol/main.module.scss';

export const Main = () => {
  // ToDo: 클릭때마다 setCurrentIndex로 currentIndex 변경
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundImagesPath = [
    { index: 0, path: '/images/bg_isedol_rewind.png'}
  ];

  useEffect(() => {
    const currentImagePath = backgroundImagesPath[currentIndex].path;
    containerRef.current!.style.backgroundImage = `url(${currentImagePath})`;
  }, [currentIndex]);

  return (
    <div className={styles.isedol_main__container} ref={containerRef}>
      <h2 className={styles.isedol_main__title}>
        <p>RE</p>
        <div className={styles.mark}>
          <span></span>
          <span></span>
        </div>
        <p>WIND</p>
      </h2>
      <div className={styles.isedol_main__subtitle_box}>
        <p>2021.12.22 MV Released</p>
        <button className={styles.play_btn}>
          <div className={styles.play_icon}></div>
        </button>
      </div>
      <div className={styles.isedol_main__slide_box}>
        {/* ToDo: backgroundImagesPath length마다 버튼 보여주깅~ */}
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Main;