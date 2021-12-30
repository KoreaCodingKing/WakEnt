import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/components/isedol/IsedolIndex.module.scss';
import IsedolHeader from '../../components/isedol/IsedolHeader';
import IsedolNotices from '../../components/isedol/IsedolNotices';
import IsedolMenuOverlay from '../../components/isedol/IsedolMenuOverlay';
import Head from 'next/head';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol__container}>
      <Head>
        <title>NOTICES - ISEGYE IDOL</title>
      </Head>
      <IsedolMenuOverlay open={isOpenMenu}></IsedolMenuOverlay>
      <div className={styles.isedol_header}>
        <IsedolHeader
          isOpenMenu={isOpenMenu}
          onMenuClick={() => setIsOpenMenu(!isOpenMenu)}
        ></IsedolHeader>
      </div>
      <div className={styles.isedol_contents}>
        <IsedolNotices></IsedolNotices>
      </div>
    </div>
  );
};

export default IsedolPage;
