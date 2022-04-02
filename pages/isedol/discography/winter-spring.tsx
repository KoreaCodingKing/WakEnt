import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../../styles/pages/discography.module.scss';
import IsedolHeader from '../../../components/isedol/IsedolHeader';
import IsedolMenuOverlay from '../../../components/isedol/IsedolMenuOverlay';
import IsedolDiscographyDetail, {
  AlbumDetail,
} from '../../../components/isedol/IsedolDiscographyDetail';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const details: AlbumDetail = {
    title: '겨울봄',
    image: '/images/album/winter-spring.jpg',
    description: `버츄얼 아이돌로 활동하고 있는 이세계 아이돌이 이번에는 새로운 장르에 도전했다.\n
이세계 아이돌의 2번째 디지털 싱글 '겨울봄' 은 사랑하는 사람을 다시는 볼 수 없을 것 같다는 불안 속에서도 희망을 잃지 않는다는 내용의 K-POP 발라드이다.\n
노래의 많은 부분이 가성으로 이루어져 있어 몽환적인 느낌과 아련한 분위기를 자아냄과 동시에 겨울과 봄이라는 2가지 계절을 상상하며 들을 수 있게 만들어졌다.\n
데뷔곡 RE : WIND 와는 정반대의 성격인 곡으로 이세계 아이돌의 새로운 매력을 느낄 수 있으며 팬 분들에게 버츄얼 아이돌로서의 다양한 모습을 보여드리려는 멤버들의 마음을 담은 곡이다.`,
    lyrics: (
      `
      처음이란 건 돌아보면
      네가 흘렸던 작은 말들
      무심한 듯 담았어 나도 모르게

      하늘을 봐도 알 수 없어
      네가 말하던 그 계절이 오면
      혹시라도 그대가 여기

      흰 눈 속에서 보이는
      시린 기억이 스쳐요
      그댈 본다면 나을까요

      날 붙잡던 손
      날 보던 그 두 눈이
      이제는 날 더 괴롭히네요
      참을 순 있죠

      조금 망설이면 어느새
      멀리 떠나버릴 것 같아
      아무 생각 않을래요

      걷다 보면 이따금
      속삭여 했던 말들
      기억하고 있어요

      흰 거리에서 보이는
      겨울바람이 스쳐요
      그댈 본다면 나 울까요

      날 붙잡던 손
      날 보던 그 두 눈이
      언젠가 날 꼭 안아주세요
      참을 수 있죠

      조금 망설이면 어느새
      그댄 내 곁으로 다가와
      아무 생각 않을래요

      끝이라고 생각했죠
      처음 모습대로
      날 기억 하나요

      꿈인 걸 알면서도
      몇 번이고 물었죠
      그때처럼
      다시 말해줘요 내게

      겨울인데도
      봄바람이 부네요
      하얀 눈이 걷히면 이곳에
      그대가 있겠죠

      따스한 햇살이 부는 날
      너에게로 다시 돌아가
      너와 함께한 기억처럼만

      la la la lalala
      la la la lalala

      어느 늦은 겨울 하늘에 눈이 와요

      la la la lalala
      la la la lalala
      
      돌아와 날 안아줘요
      `
    ),
    staff: (
      <p>
        Composed by Moon Kim, 서지은<br></br>
        Arranged by 서지은, Moon Kim<br></br>
        Lyrics by 우왁굳<br></br><br></br>
        Vocal Directed by Moon Kim<br></br>
        Vocal 이세계 아이돌<br></br>
        Background Vocals by 이세계 아이돌<br></br><br></br>
        Piano by 서지은<br></br>
        Strings by 서지은<br></br>
        Drum Programming by 서지은<br></br><br></br>
        Mixed by 서지은, Moon Kim<br></br>
        Mastered by 권남우 @821Sound Mastering<br></br>
      </p>
    ),
    links: [
      {
        title: 'YouTube MV',
        link: 'https://www.youtube.com/watch?v=JY-gJkMuJ94',
      }
    ],
    streaming: [
      {
        title: 'YouTube Music',
        link: 'https://music.youtube.com/watch?v=RbysxH3gt-Q',
      },
      {
        title: 'Spotify',
        link: 'https://open.spotify.com/track/1JUfVQxyt17lszAHbno101?si=afe632ecb14d45ae',
      },
      {
        title: 'Apple Music',
        link: 'https://music.apple.com/kr/album/winter-spring-single/1612919774',
      },
      {
        title: 'VIBE',
        link: 'https://vibe.naver.com/album/7348418',
      },
      {
        title: 'Bugs',
        link: 'https://music.bugs.co.kr/album/20455151',
      },
      {
        title: 'Melon',
        link: 'https://www.melon.com/album/detail.htm?albumId=10889597',
      },
      {
        title: 'FLO',
        link: 'https://www.music-flo.com/detail/album/edoonnehl/albumtrack',
      },
      {
        title: 'Genie',
        link: 'https://www.genie.co.kr/detail/albumInfo?axnm=82575565',
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
