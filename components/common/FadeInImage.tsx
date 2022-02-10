import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { classes } from '../../utils/class';

import styles from '../../styles/components/common/FadeInImage.module.scss';

export const FadeInImage = (props: Omit<ImageProps, 'onLoad'>) => {
  const [load, setLoaded] = useState<boolean>(false);

  return (
    <Image
      {...props}
      className={classes(
        props.className,
        styles.imageFadeIn,
        load && styles.loaded
      )}
      onLoad={() => setLoaded(true)}
    ></Image>
  );
};

export default FadeInImage;
