import {
  motion,
  MotionValue,
  useMotionTemplate,
  useSpring,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { gomemHoverState } from '../../states/gomem/hover';
import { classes } from '../../utils/class';
import { clamp } from '../../utils/number';
import LinkToIcon from '../common/icons/LinkTo';

import styles from '../../styles/components/gomem/Popup.module.scss';
import { Planets } from './Planets';

interface PopupStyles extends React.CSSProperties {
  '--x': MotionValue<string>
  '--y': MotionValue<string>
}

const springOptions: Parameters<typeof useSpring>[1] = {
  stiffness: 1000,
  damping: 100,
};

const PopupOffset = 30;

export const GomemPopup = () => {
  const { hover, x, y, d, planet } = useRecoilValue(gomemHoverState);

  const popup = useRef<HTMLDivElement>(null!);

  const sx = useSpring(0, springOptions);
  const sy = useSpring(0, springOptions);
  const sd = useSpring(0, springOptions);

  const cx = useMotionTemplate`${sx}px`;
  const cy = useMotionTemplate`${sy}px`;

  useEffect(() => {
    const rect = popup.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    sx.set(
      x + width + PopupOffset > window.innerWidth
        ? window.innerWidth - width - PopupOffset
        : x
    );

    sy.set(
      y + height + PopupOffset > window.innerHeight
        ? window.innerHeight - height - PopupOffset
        : y
    );

  }, [sx, sy, x, y]);

  useEffect(() => {
    sd.set(clamp(d, 0, 2));
  }, [sd, d]);

  return (
    <motion.div
      className={classes(
        styles.popup,
        styles.planet,
        hover && styles.show
      )}
      style={
        {
          '--x': cx,
          '--y': cy,
          '--d': sd,
        } as PopupStyles
      }
      ref={popup}
    >
      <motion.h1 className={styles.title}>{planet && Planets[planet].name}</motion.h1>
      <motion.p className={styles.description}>{planet && Planets[planet].description}</motion.p>
      <motion.p className={styles.moveTo}>
        {planet && Planets[planet].link && (
          <span>
            <LinkToIcon></LinkToIcon>
            행성간 이동은 현재 탭에서 진행됩니다.
          </span>
        )}
        {planet && Planets[planet].unit && (
          <span>
            클릭하면 멤버들을 알아볼 수 있습니다.
          </span>
        )}
      </motion.p>
    </motion.div>
  );
};

export default GomemPopup;
