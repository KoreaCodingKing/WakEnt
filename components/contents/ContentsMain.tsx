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
            <p>신선함</p>
            <p>다양함</p>
            <p>왁타버스의 매력에 빠져보세요!</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContentsMain;