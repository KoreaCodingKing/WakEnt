import { NextPage } from 'next';
import Image from 'next/image';

import styles from '../../styles/components/zaun/ZaunMain.module.scss';

export const Main: NextPage = () => {
  return (
    <div className={styles.zaun_main__container}>
      <div className={styles.background}>
        <Image
          src='/images/zaun/logo_zaun_black.png'
          layout='fill'
          alt='background'
        ></Image>
      </div>
      <div className={styles.league_list}>

      </div>
    </div>
  );
};

export default Main;
