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
    description: `오디션 부터 활동까지 전부 가상의 세계에서 진행된 메타버스 프로젝트 6인조 그룹 '이세계 아이돌'이 정식 데뷔를 확정지었다.\n
      '이세계 아이돌' 은 지난 여름, 유튜브 크리에이터 우왁굳의 버츄얼 아이돌 프로젝트에서 수백명의 경쟁을 뚫고 합격한 최종 6인의 여성 아이돌 그룹이다. 버츄얼 아이돌이 갖추어야 할 다양한 재능을 갖고 있는 아이네, 징버거, 릴파, 주르르, 고세구, 비챤 6명이 이세계 아이돌로 데뷔하는 기쁨을 누렸다.
      이들은 치열한 경쟁을 거쳐 결성된 팀이라는 점 외에 오디션부터 활동까지 가상에서 진행된다는 점에서 데뷔 전부터 큰 관심을 받았다.\n
      데뷔곡 RE : WIND 는 화려하고 리얼한 밴드 사운드 위에 이세계 아이돌 6명의 다채로운 음색이 돋보이는 곡이다.`,
    lyrics: (
      `기억나 우리 처음 만난 날
      내게 오던 너의 그 미소가
      마치 날 알고 있던 것처럼
      매일 스쳐 지나가던 바람처럼
      가끔은 우리 사이가 멀어질까
      혼자 남아버리는 상상을 해
      이런 나를 잡아줘 우리 처음
      만난 날처럼 내가 너를 꼭 찾을 수 있게
      늘 꿈에서만 그리던
      너와 함께 할 모든 날들이
      더 희미해지기 전에
      나 시간이 없어
      지금 닿을 수는 없는 거리 일지라도
      꼭 너와 함께 있다는 기분이 들어
      널 주저했던 걸음, 마음. 나는
      왜 이리 바보 같은지
      자신이 없어
      늘 같은 곳을 바라보던 너의 그 눈이 좋아
      변한 세상에서 너만은 그대로 있어 줘
      You're my sunshine
      늘 같은곳을 해매이던 너와 내 시간 속에
      날 잊어버린다 해도
      다시 한번 너를 만나러 갈 테니까
      조금씩 가까워지고 있어
      느껴지니 보이진 않아도
      한 조각 마지막 퍼즐처럼
      너 하나로 내 세상이 맞물려가
      어쩌면 넌 사라질 무지개처럼
      날 두고 떠날지도 모르지만
      이런 나를 잡아줘 우리 처음
      만난 날처럼 내가 너를 꼭 잡을 수 있게
      늘 꿈에서만 그리던
      너와 함께 할 모든 날들이
      더 희미해지기 전에
      나 시간이 없어
      지금 닿을 수는 없는 거리 일지라도
      꼭 너와 함께 있다는 기분이 들어
      날 주저했던 걸음, 마음. 너의
      세상이 끝난다 해도
      기다릴 거야
      차원을 넘어 너에게 달려가고 있어 지금
      내 심장소리가 터질 것만 같아 들어봐
      기억해 줘
      이 세상 속에 멈춰있는 너와 내 시간 속에
      어쩌면 이건 우리의
      처음이자 마지막 사랑 일 테니까
      일 테니까
      기억해 줘
      이 꿈속 너와 함께했던 시간은 진짜일까
      늘 간직하던 약속들 그대로 just waiting for you
      You're my sunshine
      이 세상 속에 멈춰있는 너와 내 시간 속에
      어쩌면 이건 우리의
      처음이자 마지막 사랑 일 테니까`
    ),
    staff: (
      <p>
        Lyrics by 우왁굳<br></br>
        Composed by Young_Vibe<br></br>
        Arranged by Young_Vibe<br></br>
        Director by 제갈공띵<br></br>
        <br></br>
        <br></br>
        Drums 곽준용<br></br>
        Bass Sweetberry<br></br>
        Guitar Young_Vibe<br></br>
        Piano Young_Vibe<br></br>
        Chorus 이세계 아이돌<br></br>
        <br></br>
        <br></br>
        Mixed by 정진 @hug studio<br></br>
        Mastered by Sage Audio
      </p>
    ),
    links: [
      {
        title: 'YouTube MV',
        link: 'https://www.youtube.com/watch?v=fgSXAKsq-Vo',
      },
    ],
    streaming: [
      {
        title: 'YouTube Music',
        link: 'https://music.youtube.com/watch?v=ZuttYdmPfzU',
      },
      {
        title: 'Spotify',
        link: 'https://open.spotify.com/album/7DiANZye6S3euQdwdI5oBh',
      },
      {
        title: 'Apple Music',
        link: 'https://music.apple.com/kr/album/re-wind/1599900373',
      },
      {
        title: 'VIBE',
        link: 'https://vibe.naver.com/album/6735206',
      },
      {
        title: 'Bugs',
        link: 'https://music.bugs.co.kr/album/20439654',
      },
      {
        title: 'Melon',
        link: 'https://www.melon.com/album/detail.htm?albumId=10815040',
      },
      {
        title: 'FLO',
        link: 'https://www.music-flo.com/detail/album/edoaiaize/albumtrack',
      },
      {
        title: 'Genie',
        link: 'https://www.genie.co.kr/detail/albumInfo?axnm=82441158',
      },
    ],
  };

  return (
    <div className={styles.isedol__container}>
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
