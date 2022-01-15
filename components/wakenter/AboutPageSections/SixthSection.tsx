import { useState } from 'react';
import { motion } from 'framer-motion';
import { AboutSectionProps } from '../../../pages/about';
import { concatClass } from '../../../utils/class';
import styles from '../../../styles/components/wakenter/AboutPageSections/SixthSection.module.scss';
import YouTubePlayerOverlay from '../../common/YouTubePlayerOverlay';
import YouTubeCard from '../../isedol/YouTubeCard';

interface YouTubeCard {
  title: string
  id: string
  thumbnail?: string
}

const Cards: YouTubeCard[] = [
  {
    title: 'It\'s Beginning To Look A Lot Like Christmas - ISEGYE IDOL',
    id: 'kNPykP_9wOQ',
  },
  {
    title: '세계 최초 메타버스 강의 - VR챗 학교',
    id: 'G531ABhyxfE'
  },
  {
    title: 'Wak Miserables (우왁굳 반응)',
    id: 'ys52M8cwuNk'
  },
  {
    title: 'My WAKTAVERSE',
    id: 'Kc85nOaqLwo'
  },
  {
    title: '이세돌 x 고멤 골프 합방',
    id: 'ineOjHIBQGk'
  },
  {
    title: '수정구슬이 내는 힌트를 보고 그림을 맞추는 게임',
    id: '6ZKSWy3uNes'
  },
  {
    title: '마리오파티 왁타버스 올스타 멤버들로 합방!',
    id: 'sfC8urnJx6Y'
  }
];

const SixthSection = ({ className }: AboutSectionProps) => {
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [youtubeID, setYoutubeID] = useState<string>('');

  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  return (
    <section className={concatClass(className)} data-index={5}>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <div className={styles.section_container}>
        <motion.div
          className={styles.contents_wrapper}
        >
          <h3 className={styles.sectionTitle}>대표 영상</h3>
          <div className={styles.grid}>
            {Cards.map(video => (
              <YouTubeCard
                key={`personal-cover-${video.id}`}
                title={video.title}
                thumbnail={video.thumbnail}
                id={video.id}
                onClick={id => openYouTube(id)}
              ></YouTubeCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SixthSection;
