import { NextPage } from "next";

import styles from '../../styles/components/contents/ContentsMain.module.scss';

export const ContentsMain: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.contents}>
        <div className={styles.title}>
          <h1>WakEntertainment만의 Contents</h1>
          <h2>
            <div className={styles.rolling_box}>
              <ul className={styles.rolling_box_inner}>
                <li>신선한</li>
                <li>다양한</li>
                <li>즐거운</li>
              </ul>
            </div>
            <p>왁타버스 컨텐츠의 매력에 빠져보세요!</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContentsMain;