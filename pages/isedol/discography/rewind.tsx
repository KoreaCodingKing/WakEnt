import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../../styles/pages/discography.module.scss';
import IsedolHeader from '../../../components/isedol/IsedolHeader';
import IsedolMenuOverlay from '../../../components/isedol/IsedolMenuOverlay';
import Head from 'next/head';
import IsedolDiscographyDetail, {
  AlbumDetail,
} from '../../../components/isedol/IsedolDiscographyDetail';

import RewindImage from '../../../public/images/album/rewind.jpg';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const details: AlbumDetail = {
    title: 'RE : WIND',
    image: RewindImage,
    description: (
      <p>
        오디션 부터 활동까지 전부 가상의 세계에서 진행된 메타버스 프로젝트 6인조
        그룹 '이세계 아이돌'이 정식 데뷔를 확정지었다.
        <br></br>
        <br></br>
        '이세계 아이돌' 은 지난 여름, 유튜브 크리에이터 우왁굳의 버츄얼 아이돌
        프로젝트에서 수백명의 경쟁을 뚫고 합격한 최종 6인의 여성 아이돌
        그룹이다.
        버츄얼 아이돌이 갖추어야 할 다양한 재능을 갖고 있는 아이네, 징버거,
        릴파, 주르르, 고세구, 비챤 6명이 이세계 아이돌로 데뷔하는 기쁨을 누렸다.
        <br></br>
        이들은 치열한 경쟁을 거쳐 결성된 팀이라는 점 외에 오디션부터 활동까지
        가상에서 진행된다는 점에서 데뷔 전부터 큰 관심을 받았다.
        <br></br>
        <br></br>
        데뷔곡 RE : WIND 는 화려하고 리얼한 밴드 사운드 위에 이세계 아이돌 6명의
        다채로운 음색이 돋보이는 곡이다.
      </p>
    ),
    staff: (
      <p>
        Lyrics by 우왁굳<br></br>
        Composed by Young_Vibe<br></br>
        Arranged by Young_Vibe<br></br>
        Director by 제갈공띵<br></br>
        <br></br><br></br>
        Drums 곽준용<br></br>
        Bass Sweetberry<br></br>
        Guitar Young_Vibe<br></br>
        Piano Young_Vibe<br></br>
        Chorus 이세계 아이돌<br></br>
        <br></br><br></br>
        Mixed by 정진 @hug studio<br></br>
        Mastered by Sage Audio
      </p>
    ),
    links: [
      {
        title: 'YouTube MV',
        link: 'https://www.youtube.com/watch?v=fgSXAKsq-Vo'
      }
    ],
    streaming: [
      {
        title: 'YouTube Music',
        link: 'https://music.youtube.com/watch?v=ZuttYdmPfzU'
      },
      {
        title: 'Spotify',
        link: 'https://open.spotify.com/album/7DiANZye6S3euQdwdI5oBh'
      },
      {
        title: 'Apple Music',
        link: 'https://music.apple.com/kr/album/re-wind/1599900373'
      },
      {
        title: 'VIBE',
        link: 'https://vibe.naver.com/album/6735206'
      },
      {
        title: 'Bugs',
        link: 'https://music.bugs.co.kr/album/20439654'
      },
      {
        title: 'Melon',
        link: 'https://www.melon.com/album/detail.htm?albumId=10815040'
      },
      {
        title: 'FLO',
        link: 'https://www.music-flo.com/detail/album/edoaiaize/albumtrack'
      },
      {
        title: 'Genie',
        link: 'https://www.genie.co.kr/detail/albumInfo?axnm=82441158'
      }
    ]
  };

  return (
    <div className={styles.isedol__container}>
      <Head>
        <title>RE : WIND - ISEGYE IDOL</title>
      </Head>
      <IsedolMenuOverlay open={isOpenMenu}></IsedolMenuOverlay>
      <div className={styles.isedol_header}>
        <IsedolHeader
          isOpenMenu={isOpenMenu}
          onMenuClick={() => setIsOpenMenu(!isOpenMenu)}
        ></IsedolHeader>
      </div>
      <div className={styles.isedol_contents}>
        <IsedolDiscographyDetail data={details}></IsedolDiscographyDetail>
      </div>
    </div>
  );
};

export default IsedolPage;
