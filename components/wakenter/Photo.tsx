import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from '../../styles/components/wakenter/Photo.module.scss';

interface PhotoProps {
  src: string
}

export const Photo = ({
  src,
  ...props
}: PhotoProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={styles.photo} {...props}>
      <Image src={src} blurDataURL={src} layout='fill'></Image>
    </div>
  );
};

export default Photo;
