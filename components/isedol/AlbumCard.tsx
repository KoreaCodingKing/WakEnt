import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/isedol/CardBase.module.scss';
import { concatClass } from '../../utils/class';

interface AlbumCardProps {
  title: string
  image: string
  link: string
}

export const AlbumCard = ({ title, link, image }: AlbumCardProps) => {
  return (
    <Link href={link} passHref>
      <a className={concatClass(styles.card, styles.clickable)}>
        <div className={styles.image_wrapper}>
          <Image src={image} placeholder='blur' blurDataURL={image} layout='fill'></Image>
        </div>
        <h3 className={styles.title}>{title}</h3>
      </a>
    </Link>
  );
};

export default AlbumCard;
