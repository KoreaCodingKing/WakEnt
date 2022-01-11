import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../../styles/pages/discography.module.scss';
import IsedolHeader from '../../../components/isedol/IsedolHeader';
import IsedolMenuOverlay from '../../../components/isedol/IsedolMenuOverlay';
import IsedolDiscography from '../../../components/isedol/IsedolDiscography';
import WakEnterMetadata from '../../../components/wakenter/Meta';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol__container}>
      <WakEnterMetadata
        title='DISCOGRAPHY'
        scope='ISEGYE IDOL'
        description='WAK Entertainment 소속 이세계 아이돌 (ISEGYE IDOL) 의 발매 음반, 커버 곡을 알아보세요.'
        image='/images/isedol_landing.png'
      ></WakEnterMetadata>
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
