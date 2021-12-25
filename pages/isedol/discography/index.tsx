import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../../styles/pages/discography.module.scss';
import IsedolHeader from '../../../components/isedol/IsedolHeader';
import IsedolMenuOverlay from '../../../components/isedol/IsedolMenuOverlay';
import IsedolDiscography from '../../../components/isedol/IsedolDiscography';
import Head from 'next/head';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol__container}>
      <Head>
        <title>DISCOGRAPHY - ISEGYE IDOL</title>
      </Head>
      <IsedolMenuOverlay open={isOpenMenu}></IsedolMenuOverlay>
      <div className={styles.isedol_header}>
        <IsedolHeader
          isOpenMenu={isOpenMenu}
          onMenuClick={() => setIsOpenMenu(!isOpenMenu)}
        ></IsedolHeader>
      </div>
      <div className={styles.isedol_contents}>
        <IsedolDiscography></IsedolDiscography>
      </div>
    </div>
  );
};

export default IsedolPage;
