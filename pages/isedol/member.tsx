import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/components/isedol/IsedolIndex.module.scss';
import IsedolHeader from '../../components/isedol/IsedolHeader';
import IsedolMembers from '../../components/isedol/IsedolMembers';
import IsedolMenuOverlay from '../../components/isedol/IsedolMenuOverlay';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol__container}>
      <IsedolMenuOverlay open={isOpenMenu}></IsedolMenuOverlay>
      <div className={styles.isedol_header}>
        <IsedolHeader
          isOpenMenu={isOpenMenu}
          onMenuClick={() => setIsOpenMenu(!isOpenMenu)}
          white={!isOpenMenu}
        ></IsedolHeader>
      </div>
      <div className={styles.isedol_contents}>
        <IsedolMembers></IsedolMembers>
      </div>
    </div>
  );
};

export default IsedolPage;
