import { NextPage } from 'next';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import styles from '../../styles/components/zaun/ZaunMain.module.scss';

export const Main: NextPage = () => {
  return (
    <div className={styles.zaun_main__container}>
      <div className={styles.background}></div>
    </div>
  );
};

export default Main;
