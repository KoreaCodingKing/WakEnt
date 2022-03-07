import { NextPage } from "next";

import styles from '../../styles/components/contents/ContentsMain.module.scss';

export const ContentsMain: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.background}></div>
    </div>
  );
};

export default ContentsMain;