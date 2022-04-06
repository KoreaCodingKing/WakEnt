import styles from '../../styles/components/isedol/CardBase.module.scss';
import { classes } from '../../utils/class';
import FadeInImage from '../common/FadeInImage';

interface YouTubeCardProps {
  title: string
  id: string
  thumbnail?: string,
  isBlackBG?: boolean,
  onClick?: (id: string) => void
}

export const YouTubeCard = ({ title, id, thumbnail, onClick, isBlackBG }: YouTubeCardProps) => {
  return (
    <div
      className={
        classes(styles.card,
          onClick && styles.clickable,
          isBlackBG && styles.blackBG
        )
      }
      onClick={() => onClick && onClick(id)}
    >
      <div className={styles.youtube_wrapper}>
        <FadeInImage src={thumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`} layout='fill' unoptimized></FadeInImage>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default YouTubeCard;
