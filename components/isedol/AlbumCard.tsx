import Link from 'next/link';
import styles from '../../styles/components/isedol/CardBase.module.scss';
import { classes } from '../../utils/class';
import FadeInImage from '../common/FadeInImage';

interface AlbumCardProps {
  title: string
  image: string
  link: string
}

export const AlbumCard = ({ title, link, image }: AlbumCardProps) => {
  return (
    <Link href={link} passHref>
      <a className={classes(styles.card, styles.clickable)}>
        <div className={styles.image_wrapper}>
          <FadeInImage src={image} placeholder='blur' blurDataURL={image} layout='fill'></FadeInImage>
        </div>
        <h3 className={styles.title}>{title}</h3>
      </a>
    </Link>
  );
};

export default AlbumCard;
