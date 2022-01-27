import { NextPage } from 'next';
import Image from 'next/image';

import styles from '../../styles/components/zaun/ZaunMain.module.scss';

export const Main: NextPage = () => {
  return (
    <div className={styles.zaun_main__container}>
      <div className={styles.background}>
        <Image
          src='https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/image-gallery/zaun-depths.jpg'
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
