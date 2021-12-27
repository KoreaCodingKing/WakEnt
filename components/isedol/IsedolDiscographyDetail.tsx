import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import styles from '../../styles/components/isedol/IsedolDiscographyDetail.module.scss';
import { concatClass } from '../../utils/class';
import LinkToIcon from '../common/icons/LinkTo';
import YouTubePlayerOverlay from '../common/YouTubePlayerOverlay';

export interface AlbumDetail {
  title: string
  image: string
  links?: {
    title: string
    link: string
  }[]
  streaming: {
    title: string
    link: string
  }[]
  description: ReactNode
  staff: ReactNode
}

export interface DiscographyDetailProps {
  data: AlbumDetail
}

export const IsedolDiscographyDetail = ({ data }: DiscographyDetailProps) => {
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [youtubeID] = useState<string>('');

  // const openYouTube = (id: string) => {
  //   setYoutubeID(id);
  //   setOpenPlayer(true);
  // };

  return (
    <div className={styles.container}>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <section className={concatClass(styles.section, styles.brief)}>
        <div className={styles.image}>
          <Image src={data.image} layout='fill'></Image>
        </div>
        <div className={styles.right_wrap}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.description}>{data.description}</div>
        </div>
      </section>
      <section className={concatClass(styles.section)}>
        <h3 className={styles.sectionTitle}>Links</h3>
        <div className={concatClass(styles.brief_links, styles.grid_links)}>
          {data.links &&
            data.links.map((v, i) => (
              <Link key={`album-link-${i}`} href={v.link} passHref>
                <p className={styles.link}>
                  <span>{v.title}</span> <LinkToIcon></LinkToIcon>
                </p>
              </Link>
            ))}
        </div>
      </section>
      <section className={concatClass(styles.section)}>
        <h3 className={styles.sectionTitle}>Streaming</h3>
        <div className={concatClass(styles.brief_links, styles.grid_links)}>
          {data.streaming &&
            data.streaming.map((v, i) => (
              <Link key={`album-link-${i}`} href={v.link} passHref>
                <p className={styles.link}>
                  <span>{v.title}</span> <LinkToIcon></LinkToIcon>
                </p>
              </Link>
            ))}
        </div>
      </section>
      <section className={concatClass(styles.section)}>
        <h3 className={styles.sectionTitle}>Staff</h3>
        <div className={styles.description}>{data.staff}</div>
      </section>
    </div>
  );
};

export default IsedolDiscographyDetail;
