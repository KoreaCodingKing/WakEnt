import Image from 'next/image';
import { useRef } from 'react';
import styles from '../../styles/components/isedol/main.module.scss';

export const Main = () => {
  // ToDo: useEffect 이용 index바뀔때마다 ref에 background 접근하여 backgroundImagesPath 경로 변경
  const containerRef = useRef(null);
  const backgroundImagesPath = [
    { index: 0, path: '/images/wak-enter-centered.png'}
  ]

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