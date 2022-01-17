import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Gomem3D from '../../components/gomem/Gomem3D';
import WakEnterMetadata from '../../components/wakenter/Meta';
import { WakEnterLogo } from '../../components/wakenter/WakEnterHeader';

import styles from '../../styles/pages/gomem/index.module.scss';

const Gomem: NextPage = () => {
  const [sceneActive, setSceneActive] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    requestAnimationFrame(() => {
      setSceneActive(true);
    });
  }, []);

  return (
    <>
      <WakEnterMetadata title='고정 멤버'></WakEnterMetadata>
      <div className={styles.main}>
        <div className={styles.gomem3D}>
          <Gomem3D sceneActive={sceneActive}></Gomem3D>
        </div>
      </div>
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
