import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/components/isedol/isedoleMain.module.scss';
import IsedolHeader from '../../components/isedol/IsedolHeader';
import Main from './main';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol_container}>
      <IsedolHeader isOpenMenu={isOpenMenu}></IsedolHeader>
      <div className={styles.isedol_contents}>
        <Main></Main>
      </div>
    </div>
  );
};

export default IsedolPage;
