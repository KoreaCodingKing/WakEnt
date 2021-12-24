import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/components/isedol/IsedolDiscography.module.scss';
import AlbumCard from './AlbumCard';
import YouTubeCard from './YouTubeCard';

export const IsedolDiscography: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DISCOGRAPHY</h1>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Album</h3>
        <div className={styles.grid}>
          <AlbumCard
            title='RE : WIND'
            image='/images/album/rewind.jpg'
            link='/isedol/discography/rewind'
          ></AlbumCard>
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Cover</h3>
        <div className={styles.grid}>
          <YouTubeCard
            title='장난기 기능'
            id='fU8picIMbSk'
          ></YouTubeCard>
          <YouTubeCard
            title="It's Beginning To Look A Lot Like Christmas"
            id='kNPykP_9wOQ'
          ></YouTubeCard>
        </div>
      </section>
    </div>
  );
};

export default IsedolDiscography;
