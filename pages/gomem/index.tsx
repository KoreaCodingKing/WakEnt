import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Gomem3D from '../../components/gomem/Gomem3D';
import WakEnterMetadata from '../../components/wakenter/Meta';

import styles from '../../styles/pages/gomem/index.module.scss';

const Gomem: NextPage = () => {
  const [sceneActive, setSceneActive] = useState<boolean>(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setSceneActive(true);
    });
  }, []);

  return (
    <>
      <WakEnterMetadata title='고정 멤버'></WakEnterMetadata>
      <div className={styles.main}>
        <header>
          {/* <WakEnterHeader white={page === 1}></WakEnterHeader> */}
        </header>
        <div className={styles.gomem3D}>
          <Gomem3D sceneActive={sceneActive}></Gomem3D>
        </div>
      </div>
    </>
  );
};

export default Gomem;
