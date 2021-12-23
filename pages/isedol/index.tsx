import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/components/isedol/isedoleMain.module.scss';
import IsedolHeader from '../../components/isedol/IsedolHeader';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol_container}>
      <IsedolHeader isOpenMenu={isOpenMenu}></IsedolHeader>
      <div className={styles.isedol_contents}>
        {/* ToDo: 메인, 멤버, discography등 보여주는 콘텐츠 */}
      </div>
    </div>
  );
};

export default IsedolPage;
