import {
  useMotionTemplate,
  useSpring,
  motion,
  MotionValue,
  Spring,
} from 'framer-motion';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Gomem3D, { PointerUpdateHandler } from '../../components/gomem/Gomem3D';
import WakEnterMetadata from '../../components/wakenter/Meta';
import { WakEnterLogo } from '../../components/wakenter/WakEnterHeader';

import styles from '../../styles/pages/gomem/index.module.scss';
import { concatClass } from '../../utils/class';

interface MemberPopupStyles extends React.CSSProperties {
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
  const pointerUpdate: PointerUpdateHandler = (active, lx, ly, ld) => {
    if (active !== showMemberPopup) {
      setShowMemberPopup(active);
    }

    x.set(lx);
    y.set(ly);
    d.set(ld);
  };

  return (
    <>
      <WakEnterMetadata title='고정 멤버'></WakEnterMetadata>
      <div className={styles.main}>
        <div className={styles.gomem3D}>
          <Gomem3D
            pointerUpdate={pointerUpdate}
            sceneActive={sceneActive}
          ></Gomem3D>
        </div>
      </div>
      <motion.div
        className={concatClass(
          styles.memberPopup,
          showMemberPopup && styles.show
        )}
        style={
          {
            '--x': xt,
            '--y': yt,
            '--d': d
          } as MemberPopupStyles
        }
        ref={popup}
      >
        <h1 className={styles.title}>멤버 이름</h1>
        <p className={styles.description}>멤버 설명이 여기에 들어갈 예정입니다.</p>
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
