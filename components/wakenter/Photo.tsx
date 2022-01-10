import Image from 'next/image';
import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';

import styles from '../../styles/components/wakenter/Photo.module.scss';

interface PhotoProps {
  src: string
  rotate?: boolean
}

interface PhotoStyles extends React.CSSProperties {
  '--rotate': string
}

const useRandomRotate = (use: boolean | undefined, min: number, max: number) => {
  const [rotate, setRotate] = useState<string>('0deg');

  useEffect(() => {
    setRotate(`${use ? Math.random() * (max - min) + min : 0}deg`);
  }, [use]);

  return rotate;
};

export const Photo = ({
  src,
  rotate,
  ...props
}: PhotoProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {

  const rotateValue = useRandomRotate(rotate, -20, 20);

  return (
    <div className={styles.photo} {...props} style={{
      '--rotate': rotateValue
    } as PhotoStyles}>
      <Image src={src} blurDataURL={src} layout='fill'></Image>
    </div>
  );
};

export default Photo;
