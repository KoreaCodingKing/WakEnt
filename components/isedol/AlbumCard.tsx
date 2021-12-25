import Image from 'next/image';
import styles from '../../styles/components/isedol/CardBase.module.scss';
import ImageLoader from '../common/ImageLoader';

interface AlbumCardProps {
  title: string
  image: string
  link: string
  blurhash?: string
}

export const AlbumCard = ({ title, link, image, blurhash }: AlbumCardProps) => {
  return <div className={styles.card}>
    <div className={styles.image_wrapper}>
      <ImageLoader blurDataURL={blurhash} src={image} layout='fill'></ImageLoader>
    </div>
    <h3 className={styles.title}>{ title }</h3>
  </div>;
};

export default AlbumCard;