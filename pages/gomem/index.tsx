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
import { useEffect, useRef, useState } from 'react';
import ChevronIcon from '../../components/common/icons/Chevron';
import Gomem3D, {
  GomemPlanetKeys,
  PointerUpdateHandler,
} from '../../components/gomem/Gomem3D';
import WakEnterMetadata from '../../components/wakenter/Meta';
import { WakEnterLogo } from '../../components/wakenter/WakEnterHeader';

import styles from '../../styles/pages/gomem/index.module.scss';
import { concatClass } from '../../utils/class';
import { clamp } from '../../utils/number';

const PlanetMetadata: {
  [key in GomemPlanetKeys]: {
    name: string
    desc: string
  }
} = {
  isedol: {
    name: '이세계 아이돌',
    desc:
      '2021년 8월에 혜성같이 등장한 행성. 여섯 생명체가 거주하는 것으로 알려져 있는데, 이들의 특이 사항으로는 노래를 잘한다는 점이 있다.',
  },
  gomem: {
    name: '고정멤버 시즌 2',
    desc: '앙~ 킹아~',
  },
  wakgood: {
    name: '왁물원',
    desc:
      '침팬치와 유사한 생명체가 거주한다. 이들은 "자유 게시판"이라는 분지에 배변 활동을 하는 것으로 알려져 있다.',
  },
};

const PlanetKeys = Object.keys(PlanetMetadata) as GomemPlanetKeys[];

interface PopupStyles extends React.CSSProperties {
  '--x': MotionValue<string>
  '--y': MotionValue<string>
}

const springOptions: Parameters<typeof useSpring>[1] = {
  stiffness: 1000,
  damping: 100,
};

const usePlanetSlider: () => [GomemPlanetKeys, () => void, () => void] = () => {
  const [index, setIndex] = useState<number>(1);

  const prev = () => {
    setIndex(index - 1 < 0 ? PlanetKeys.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index + 1 >= PlanetKeys.length ? 0 : index + 1);
  };

  return [PlanetKeys[index], prev, next];
};

/**
 * FIXME : 코드가 너무 중구난방
 */

const Gomem: NextPage = () => {
  const [sceneActive, setSceneActive] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    requestAnimationFrame(() => {
      setSceneActive(true);
    });
  }, []);

  const popup = useRef<HTMLDivElement>(null!);
  const [showMemberPopup, setShowMemberPopup] = useState<boolean>(false);
  const [showPlanetPopup, setShowPlanetPopup] = useState<boolean>(false);

  const [planet, prev, next] = usePlanetSlider();

  const [planetScope, setPlanetScope] = useState<GomemPlanetKeys | null>(null);

  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);
  const d = useSpring(0, springOptions);

  const xt = useMotionTemplate`${x}px`;
  const yt = useMotionTemplate`${y}px`;

  /**
   *
   * @param active 요소에 포인터가 있는지에 대한 여부
   * @param lx local X
   * @param ly local Y
   * @param ld local Distance
   */
  const mainPointerUpdate: PointerUpdateHandler = (
    scope,
    active,
    lx,
    ly,
    ld
  ) => {
    if (active !== showMemberPopup) {
      setShowMemberPopup(active);
    }

    x.set(lx);
    y.set(ly);
    d.set(ld);
  };

  const otherPointerUpdate: PointerUpdateHandler = (
    scope,
    active,
    lx,
    ly,
    ld
  ) => {
    if (active !== showPlanetPopup) {
      setShowPlanetPopup(active);
    }

    if (scope !== planetScope) {
      setPlanetScope(scope ?? null);
    }

    x.set(lx);
    y.set(ly);
    d.set(clamp(ld, 0, 2));
  };

  return (
    <>
      <WakEnterMetadata title='고정 멤버'></WakEnterMetadata>
      <div className={styles.main}>
        <div className={styles.gomem3D}>
          <Gomem3D
            mainPointerUpdate={mainPointerUpdate}
            planet={planet}
            otherPointerUpdate={otherPointerUpdate}
            sceneActive={sceneActive}
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
          >
            {PlanetMetadata[planet].name}
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
          styles.member,
          showMemberPopup && styles.show
        )}
        style={
          {
            '--x': xt,
            '--y': yt,
            '--d': d,
          } as PopupStyles
        }
        ref={popup}
      >
        <h1 className={styles.title}>멤버 이름</h1>
        <p className={styles.description}>
          멤버 설명이 여기에 들어갈 예정입니다.
        </p>
      </motion.div>
      <motion.div
        className={concatClass(
          styles.popup,
          styles.planet,
          showPlanetPopup && styles.show
        )}
        style={
          {
            '--x': xt,
            '--y': yt,
            '--d': d,
          } as PopupStyles
        }
        ref={popup}
      >
        {planetScope && (
          <>
            <h1 className={styles.title}>{PlanetMetadata[planetScope].name}</h1>
            <p className={styles.description}>
              {PlanetMetadata[planetScope].desc}
              <br></br>
              행성간 이동은 현재 탭에서 진행됩니다.
            </p>
          </>
        )}
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
