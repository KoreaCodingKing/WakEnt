import { NextPage } from 'next';
import { useState } from 'react';
import { MemberID, Members } from '../../structs/member';
import styles from '../../styles/components/isedol/IsedolDiscography.module.scss';
import YouTubePlayerOverlay from '../common/YouTubePlayerOverlay';
import AlbumCard from './AlbumCard';
import YouTubeCard from './YouTubeCard';

interface YouTubeVideo {
  title: string
  thumbnail?: string
  id: string
}

const IsedolCover: YouTubeVideo[] = [
  {
    title: '장난기 기능',
    id: 'fU8picIMbSk',
  },
  {
    title: "It's Beginning To Look A Lot Like Christmas",
    id: 'kNPykP_9wOQ',
  },
];

const MemberCover: Record<MemberID, YouTubeVideo[]> = {
  ine: [
    {
      title: '아이유 - 봄 안녕 봄',
      id: 'oUcoC7V6tgw',
    },
    {
      title: '아이유 - 라일락 (Citypop Remix)',
      id: 'mGEFsIM5TvE',
    },
    {
      title: '아이묭(あいみょん) - 마리골드(マリーゴールド)',
      id: 'KoNBf6IT0k0',
    },
    {
      title: '연습실 1절 라이브 모음',
      id: '_klX8vJo4Co',
    },
    {
      title: '라이브 플레이리스트',
      id: 'H4bhRn2c8Cc',
    },
    {
      title: '"Here Comes a Thought" - Steven Universe',
      id: 'TeC8sgoCOfc',
    },
    {
      title: '선우정아 - 고양이 (with 비챤)',
      id: '4xZYZTWH0qk',
    },
    {
      title: '스즈미야 하루히의 우울 - God knows...',
      id: '-in8F0zmLcM',
    },
  ],
  jingburger: [
    {
      title: 'ENVY BABY',
      id: 'JywvDgXRRBM',
    },
    {
      title: 'supercell - 네가 모르는 이야기',
      id: 'g6U0VzqgKi0',
    },
    {
      title: 'YUI - Rolling Star',
      id: 'bjp2-eTndZs',
    },
    {
      title: 'うまぴょい伝説',
      id: 'Rf9WuEMIPmI',
    },
    {
      title: 'Shinra-Bansho - 반짝이는 나머지 대전쟁',
      id: '5IR-FkBa3Kk',
    },
    {
      title: 'PRODUCE 48 - 내꺼야',
      id: 'SQR0tzDvSVU',
    },
    {
      title: '호쇼마린 - Ahoy!! 우리는 버거해적단☆',
      id: '7E_cZ9eU3ZE',
    },
    {
      title: 'おめシス × YuNi - Happy Halloween',
      id: 'zjZpfpRkHJs',
    },
    {
      title: '아이유 - 잔소리',
      id: 'KmOMHxhz4t0',
    },
    {
      title: 'JUST 4 U...',
      id: 'kUxzmSyxwzQ',
    },
  ],
  lilpa: [
    {
      title: 'LiSA - 불꽃 (炎)',
      id: 'FAEARaip0rM',
    },
    {
      title: 'Chicago - Roxie',
      id: 'WS-bGFcPf9I',
    },
    {
      title: '에픽세븐 OST - Promise',
      id: '6hEvgKL0ClA',
    },
  ],
  jururu: [
    {
      title: 'M@STERPIECE, 아틀란티스 소녀',
      id: 'WItY2T5zz1A',
    },
    {
      title: '호쇼마린 - Ahoy!! 우리는 호쇼해적단☆',
      id: '8kuevWdt01M',
    },
  ],
  gosegu: [
    {
      title: '사쿠란보로 킹받게 하는 버츄얼 아이돌',
      thumbnail: 'https://img.youtube.com/vi/7GyW2INMluY/mqdefault.jpg',
      id: '7GyW2INMluY',
    },
    {
      title: '뢴트게늄 - 노예',
      id: '_PJvRDp4S5s',
    },
    {
      title: '별이 되지 않아도 돼 - 109',
      id: 'h5yU8WZsB9g',
    },
    {
      title: '천양 다이노스 공식 응원가',
      id: '5aIUBhw7CVc',
    },
  ],
  viichan: [
    {
      title: 'DAYBREAK FRONTLINE',
      id: '--Go33WYnqw',
    },
    {
      title: 'Ahoy!! 우리는 비챤해적단☆ (COVER)',
      id: 'g0jprFO8S_M',
    },
    {
      title: '천성의 약함 (Arrange.ver)',
      id: 'nXcGESw6FZE',
    },
    {
      title: '로키 (ROKI)',
      id: '4dsMLdXpDOY',
    },
    {
      title: 'Manic',
      id: 'HxMz-4sBodY',
    },
    {
      title: '장산범',
      id: '8qGfUWchv50',
    },
    {
      title: '유령도쿄',
      id: 'P-wOE92vfyk',
    },
    {
      title: '타마야 (TAMAYA)',
      id: '-X11qNjLGPY',
    },
    {
      title: 'Rumor',
      thumbnail: 'https://img.youtube.com/vi/1f0KwkGLXr0/mqdefault.jpg',
      id: '1f0KwkGLXr0',
    },
    {
      title: '포니 (phony) / COVER ✦',
      id: 'GragY5EAtrM',
    },
    {
      title:
        'League of Legends - Legends Never Die',
      id: 'yp-AMt9cpUE',
    },
    {
      title: 'Henceforth',
      id: 'xBiOm4-fkU4',
    },
    {
      title: 'Starduster',
      id: 'oFCT-7KEWhU',
    },
    {
      title: 'Lemon',
      thumbnail: 'https://img.youtube.com/vi/Q14LWSckkPg/mqdefault.jpg',
      id: 'Q14LWSckkPg',
    },
    {
      title: '텔레캐스터 비보이',
      id: 'oHT3SuM78Ew',
    },
    {
      title: '플라토닉 러브',
      id: 'Hr26SWCKZrc',
    },
    {
      title: '내일 또 보자',
      id: 'zlESDaNUAR8',
    },
    {
      title: '오니가 없는 사이에',
      id: 'F_UyHfLhxPY',
    },
    {
      title: '뫼비우스 (Möbius)',
      thumbnail: 'https://img.youtube.com/vi/wEZAQxRXyT4/mqdefault.jpg',
      id: 'wEZAQxRXyT4',
    },
    {
      title: '사랑을 전하고 싶다던가',
      id: 'w1kTv8iUx9w',
    },
    {
      title: '아이보리',
      id: 'fKZIZpxVAk0',
    },
    {
      title: '상상 포레스트',
      thumbnail: 'https://img.youtube.com/vi/7e9o6cjwzGM/mqdefault.jpg',
      id: '7e9o6cjwzGM',
    },
    {
      title: 'VORACITY',
      id: 'yWYhbDUzIMM',
    },
    {
      title: '빌런',
      id: 'QJ6HU-ya_VY',
    },
    {
      title: '알고 싶어',
      id: 'ka5SzoD9FbU',
    },
    {
      title: '일각수',
      id: '0p2ihoAkYMM',
    },
    {
      title: '에리카 (Erica)',
      id: 'VVYSlDVThMA',
    },
    {
      title: 'p.h.',
      thumbnail: 'https://img.youtube.com/vi/0JAwkZSQ5Fk/mqdefault.jpg',
      id: '0JAwkZSQ5Fk',
    },
    {
      title: '비밀',
      id: 'kmE3aQitC9M',
    },
    {
      title: '보카 델라 베리타 (Bocca Della Verità)',
      thumbnail: 'https://img.youtube.com/vi/EUIg7bDeK44/mqdefault.jpg',
      id: 'EUIg7bDeK44',
    },
    {
      title: 'Corruption',
      id: 'SXDZ05bMQ2U',
    },
    {
      title: '8.32',
      thumbnail: 'https://img.youtube.com/vi/USiiNvCvqOo/mqdefault.jpg',
      id: 'USiiNvCvqOo',
    },
    {
      title: '금목서',
      id: 'xKmnClSvmOI',
    },
    {
      title: '언그레이 데이즈 (Ungray days)',
      id: '4shCqYE7G8I',
    },
    {
      title: '투백합',
      id: 'ACbaS3YxLZk',
    },
    {
      title: '시간의 무희',
      thumbnail: 'https://img.youtube.com/vi/yyf7lNBp3bU/mqdefault.jpg',
      id: 'yyf7lNBp3bU',
    },
  ],
};

export const IsedolDiscography: NextPage = () => {
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [youtubeID, setYoutubeID] = useState<string>('');

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
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Cover</h3>
        <div className={styles.grid}>
          {IsedolCover.map(cover => (
            <YouTubeCard
              title={cover.title}
              thumbnail={cover.thumbnail}
              id={cover.id}
              onClick={id => openYouTube(id)}
            ></YouTubeCard>
          ))}
        </div>
      </section>
      {Object.keys(MemberCover).map(member => (
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            {Members[member as MemberID].name.ko}
          </h3>
          <div className={styles.grid}>
            {MemberCover[member as MemberID].map(cover => (
              <YouTubeCard
                title={cover.title}
                thumbnail={cover.thumbnail}
                id={cover.id}
                onClick={id => openYouTube(id)}
              ></YouTubeCard>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default IsedolDiscography;
