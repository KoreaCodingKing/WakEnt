import Image from 'next/image';
import styles from '../../styles/components/isedol/CardBase.module.scss';

interface YouTubeCardProps {
  title: string
  id: string
}

export const YouTubeCard = ({ title, id }: YouTubeCardProps) => {
  return <div className={styles.card}>
    <div className={styles.youtube_wrapper}>
      <Image src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} layout='fill'></Image>
    </div>
    <h3 className={styles.title}>{ title }</h3>
  </div>;
};

export default YouTubeCard;