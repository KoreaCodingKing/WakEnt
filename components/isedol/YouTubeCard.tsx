import Image from 'next/image';
import styles from '../../styles/components/isedol/CardBase.module.scss';
import { concatClass } from '../../utils/class';

interface YouTubeCardProps {
  title: string
  blurhash?: string
  id: string
  onClick?: (id: string) => void
}

export const YouTubeCard = ({ title, id, onClick, blurhash }: YouTubeCardProps) => {
  return (
    <div
      className={concatClass(styles.card, onClick && styles.clickable)}
      onClick={() => onClick && onClick(id)}
    >
      <div className={styles.youtube_wrapper}>
        <Image src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} layout='fill'></Image>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default YouTubeCard;
