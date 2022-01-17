import {
  useMotionTemplate,
  useSpring,
  motion,
  MotionValue,
} from 'framer-motion';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Gomem3D, {
  GomemPlanetScope,
  PointerUpdateHandler,
} from '../../components/gomem/Gomem3D';
import WakEnterMetadata from '../../components/wakenter/Meta';
import { WakEnterLogo } from '../../components/wakenter/WakEnterHeader';

import styles from '../../styles/pages/gomem/index.module.scss';
import { concatClass } from '../../utils/class';
import { clamp } from '../../utils/number';

const PlanetMetadata: {
  [key in GomemPlanetScope]: {
    name: string
    desc: string
  }
} = {
  isedol: {
    name: '이세계 아이돌',
    desc: '2021년 8월에 혜성같이 등장한 행성. 여섯 생명체가 거주하는 것으로 알려져 있는데, 이들의 특이 사항으로는 노래를 잘한다는 점이 있다.',
  },
  wakgood: {
    name: '왁물원',
    desc: '침팬치와 유사한 생명체가 거주한다. 이들은 "자유 게시판"이라는 분지에 배변 활동을 하는 것으로 알려져 있다.'
  }
};

interface PopupStyles extends React.CSSProperties {
  '--x': MotionValue<string>
  '--y': MotionValue<string>
}

const springOptions: Parameters<typeof useSpring>[1] = {
  stiffness: 1000,
  damping: 100,
};

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

  const [planetScope, setPlanetScope] = useState<GomemPlanetScope | null>(null);

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
            otherPointerUpdate={otherPointerUpdate}
            sceneActive={sceneActive}
          ></Gomem3D>
        </div>
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
              {PlanetMetadata[planetScope].desc}<br></br>
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
