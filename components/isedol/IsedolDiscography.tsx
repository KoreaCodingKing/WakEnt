import { NextPage } from 'next';
import { useRef, useState } from 'react';
import {
  IsedolCover,
  IsedolOriginalSong,
  MemberCover,
} from '../../structs/cover';
import { IsedolMemberID, IsedolMembers } from '../../structs/member';
import styles from '../../styles/components/isedol/IsedolDiscography.module.scss';
import Button from '../common/Button';
import { useHorizonalPageScroller } from '../common/Scroll';
import YouTubePlayerOverlay from '../common/YouTubePlayerOverlay';
import AlbumCard from './AlbumCard';
import YouTubeCard from './YouTubeCard';

export const IsedolDiscography: NextPage = () => {
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [youtubeID, setYoutubeID] = useState<string>('');
  const [tab, setTab] = useState<string>('ine');
  const tabRef = useRef<HTMLDivElement>(null);

  const membersTabCache: HTMLElement[] = [];

  useHorizonalPageScroller(tabRef, 1000, membersTabCache);

  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DISCOGRAPHY</h1>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Album</h3>
        <div className={styles.grid}>
          <AlbumCard
            title='RE : WIND'
            image='/images/album/rewind.jpg'
            link='/isedol/discography/rewind'
          ></AlbumCard>
          <AlbumCard
            title='겨울봄'
            image='/images/album/winter-spring.jpg'
            link='/isedol/discography/winter-spring'
          ></AlbumCard>
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Original Songs</h3>
        <div className={styles.grid}>
          {IsedolOriginalSong.map(original => (
            <YouTubeCard
              key={`cover-${original.id}`}
              title={original.title}
              thumbnail={original.thumbnail}
              id={original.id}
              onClick={id => openYouTube(id)}
            ></YouTubeCard>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Group Cover</h3>
        <div className={styles.grid}>
          {IsedolCover.map(cover => (
            <YouTubeCard
              key={`cover-${cover.id}`}
              title={cover.title}
              thumbnail={cover.thumbnail}
              id={cover.id}
              onClick={id => openYouTube(id)}
            ></YouTubeCard>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Member Cover</h3>
        <div className={styles.tabs} ref={tabRef}>
          {Object.keys(MemberCover).map((member: string, index: number) => (
            <div
              key={`tabs-${index}`}
              ref={(element: HTMLDivElement) =>
                element && membersTabCache.push(element)
              }
            >
              <Button onClick={() => setTab(member)} active={member === tab}>
                {IsedolMembers[member as IsedolMemberID].name.ko}
              </Button>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.grid}>
          {MemberCover[tab as IsedolMemberID].map(cover => (
            <YouTubeCard
              key={`personal-cover-${cover.id}`}
              title={cover.title}
              thumbnail={cover.thumbnail}
              id={cover.id}
              onClick={id => openYouTube(id)}
            ></YouTubeCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IsedolDiscography;
