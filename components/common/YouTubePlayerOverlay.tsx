import { useRef } from 'react';
import styles from '../../styles/components/common/YouTubePlayerOverlay.module.scss';
import { concatClass } from '../../utils/class';

interface YouTubePlayerOverlayProps {
  id: string
  open: boolean
  close: () => void
}

export const YouTubePlayerOverlay = ({
  id,
  open,
  close,
}: YouTubePlayerOverlayProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={concatClass(styles.overlay, open && styles.open)}
      onClick={() => close && close()}
      ref={ref}
    >
      {open ? (
        <iframe
          width='80%'
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&color=white`}
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : null}
    </div>
  );
};

export default YouTubePlayerOverlay;
