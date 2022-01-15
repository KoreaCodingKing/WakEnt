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
    <section className={concatClass(className)} data-index={4}>
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
