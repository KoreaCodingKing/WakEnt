import Image, { ImageProps } from 'next/image';
import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { decode } from 'blurhash';

import styles from '../../styles/components/common/ImageLoader.module.scss';

interface HashCanvasProps {
  hash: string
}

const HashCanvas = (props: HTMLAttributes<HTMLCanvasElement> & HashCanvasProps) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();

    const pixels = decode(props.hash, Math.floor(rect.width), Math.floor(rect.height), 1);

    ref.current.width = rect.width;
    ref.current.height = rect.height;

    const ctx = ref.current.getContext('2d');

    if (!ctx) {
      return;
    }

    const imageData = ctx.createImageData(rect.width, rect.height);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  }, [ref.current]);

  return <canvas ref={ref} {...props}></canvas>;
};

export const ImageLoader = (props: ImageProps) => {
  const [load, setLoaded] = useState<boolean>(false);

  return (
    <div className={props.className}>
      {props.blurDataURL && (
        <HashCanvas className={styles.loader} data-done={load} hash={props.blurDataURL}></HashCanvas>
      )}
      <Image blurDataURL={props.blurDataURL} onLoad={() => setLoaded(true)} {...props}></Image>
    </div>
  );
};

export default ImageLoader;
