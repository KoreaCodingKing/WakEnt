import { NextPage } from 'next';
import Gomem3D from '../../components/gomem/Gomem3D';
import WakEnterMetadata from '../../components/wakenter/Meta';

import styles from '../../styles/pages/gomem/index.module.scss';

const Gomem: NextPage = () => {
  return (
    <>
      <WakEnterMetadata title='고정 멤버'></WakEnterMetadata>
      <div className={styles.main}>
        <header>
          {/* <WakEnterHeader white={page === 1}></WakEnterHeader> */}
        </header>
        <div className={styles.gomem3D}>
          <Gomem3D></Gomem3D>
        </div>
      </div>
    </>
  );
};

export default Gomem;
