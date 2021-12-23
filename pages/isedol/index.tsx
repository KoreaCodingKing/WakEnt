import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/components/isedol/isedoleIndex.module.scss';
import IsedolHeader from '../../components/isedol/IsedolHeader';
import Main from '../../components/isedol/IsedolMain';
import IsedolMenuOverlay from '../../components/isedol/IsedolMenuOverlay';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol__container}>
      <IsedolMenuOverlay open={isOpenMenu}></IsedolMenuOverlay>
      <div className={styles.isedol_header}>
        <IsedolHeader isOpenMenu={isOpenMenu}
          onMenuClick={() => setIsOpenMenu(!isOpenMenu)}></IsedolHeader>
      </div>
      <div className={styles.isedol_contents}>
        <Main></Main>
      </div>
    </div>
  );
};

export default IsedolPage;
