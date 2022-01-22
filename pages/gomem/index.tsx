import {
  useMotionTemplate,
  useSpring,
  motion,
  MotionValue,
  AnimatePresence,
} from 'framer-motion';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ChevronIcon from '../../components/common/icons/Chevron';
import LinkToIcon from '../../components/common/icons/LinkTo';
import Gomem3D from '../../components/gomem/Gomem3D';
import { PointerUpdateHandler } from '../../components/gomem/Gomem3DUtils';
import {
  PlanetKeys,
  PlanetKeysArray,
  Planets,
} from '../../components/gomem/Planets';

import WakEnterMetadata from '../../components/wakenter/Meta';
import { WakEnterLogo } from '../../components/wakenter/WakEnterHeader';

import styles from '../../styles/pages/gomem/index.module.scss';
import { concatClass } from '../../utils/class';
import { clamp } from '../../utils/number';

interface PopupStyles extends React.CSSProperties {
  '--x': MotionValue<string>
  '--y': MotionValue<string>
}

const springOptions: Parameters<typeof useSpring>[1] = {
  stiffness: 1000,
  damping: 100,
};

const usePlanetSlider: () => [PlanetKeys, () => void, () => void] = () => {
  const [index, setIndex] = useState<number>(1);

  const prev = () => {
    setIndex(index - 1 < 0 ? PlanetKeysArray.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index + 1 >= PlanetKeysArray.length ? 0 : index + 1);
  };

  return [PlanetKeysArray[index], prev, next];
};

/**
 * FIXME : 코드가 너무 중구난방
 */

const PopupOffset = 30;

const Gomem: NextPage = () => {
  const router = useRouter();

  const popup = useRef<HTMLDivElement>(null!);
  const [showPlanetPopup, setShowPlanetPopup] = useState<boolean>(false);

  const [planet, prev, next] = usePlanetSlider();

  const [planetScope, setPlanetScope] = useState<PlanetKeys | null>(null);

  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);
  const d = useSpring(0, springOptions);

  const cx = useMotionTemplate`${x}px`;
  const cy = useMotionTemplate`${y}px`;

  const onPlanetHover: PointerUpdateHandler = (scope, active, lx, ly, ld) => {
    if (active !== showPlanetPopup) {
      setShowPlanetPopup(active);
    }

    if (scope !== planetScope) {
      setPlanetScope(scope ?? null);
    }

    const rect = popup.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    x.set(
      lx + width + PopupOffset > window.innerWidth
        ? window.innerWidth - width - PopupOffset
        : lx
    );

    y.set(
      ly + height + PopupOffset > window.innerHeight
        ? window.innerHeight - height - PopupOffset
        : ly
    );

    d.set(clamp(ld, 0, 2));
  };

  const onPlanetClick = (name: PlanetKeys) => {
    if (Planets[name] && typeof Planets[name].link === 'string') {
      router.push(Planets[name].link!);
    }
  };

  return (
    <>
      <WakEnterMetadata title='고정 멤버'></WakEnterMetadata>
      <div className={styles.main}>
        <div className={concatClass(styles.gomem3D, showPlanetPopup && styles.hover)}>
          <Gomem3D
            planet={planet}
            onPlanetHover={onPlanetHover}
            onPlanetClick={onPlanetClick}
          ></Gomem3D>
        </div>
      </div>
      <motion.div className={styles.planetName}>
        <AnimatePresence>
          <motion.p
            key={planet}
            initial={{ opacity: 0, translateX: -10 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 10 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 100 }}
          >
            <span className={styles.title}>{Planets[planet].name}</span>
            <span className={styles.description}>{Planets[planet].desc}</span>
          </motion.p>
        </AnimatePresence>
      </motion.div>
      <div
        className={concatClass(styles.navigateButton, styles.left)}
        onClick={prev}
      >
        <ChevronIcon width={32} stroke={0}></ChevronIcon>
      </div>
      <div
        className={concatClass(styles.navigateButton, styles.right)}
        onClick={next}
      >
        <ChevronIcon right width={32} stroke={0}></ChevronIcon>
      </div>
      <motion.div
        className={concatClass(
          styles.popup,
          styles.planet,
          showPlanetPopup && styles.show
        )}
        style={
          {
            '--x': cx,
            '--y': cy,
            '--d': d,
          } as PopupStyles
        }
        ref={popup}
      >
        <motion.h1 className={styles.title}>
          {planetScope && Planets[planetScope].name}
        </motion.h1>
        <motion.p className={styles.description}>
          {planetScope && Planets[planetScope].desc}
        </motion.p>
        <motion.p className={styles.moveTo}>
          {planetScope && Planets[planetScope].link && (
            <span>
              <LinkToIcon></LinkToIcon>
              행성간 이동은 현재 탭에서 진행됩니다.
            </span>
          )}
        </motion.p>
      </motion.div>
      <Link key={'link-wak-enter'} href={'/'} passHref>
        <div
          className={styles.logo}
          tabIndex={100}
          onKeyDown={ev => ev.key === 'Enter' && router.push('/')}
        >
          <WakEnterLogo white></WakEnterLogo>
        </div>
      </Link>
    </>
  );
};

export default Gomem;
