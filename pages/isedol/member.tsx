import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../styles/components/isedol/IsedolIndex.module.scss';
import IsedolHeader from '../../components/isedol/IsedolHeader';
import IsedolMembersPage from '../../components/isedol/IsedolMembers';
import IsedolMenuOverlay from '../../components/isedol/IsedolMenuOverlay';
import WakEnterMetadata from '../../components/wakenter/Meta';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol__container}>
      <WakEnterMetadata
        title='MEMBER'
        scope='ISEGYE IDOL'
        description='2021년 8월에 결성된 6인조 버츄얼 아이돌 그룹 이세계 아이돌 멤버 (아이네, 징버거, 릴파, 주르르, 고세구, 비챤) 소개 페이지입니다.'
        image='/images/isedol_landing.png'
      ></WakEnterMetadata>
      <IsedolMenuOverlay open={isOpenMenu}></IsedolMenuOverlay>
      <div className={styles.isedol_header}>
        <IsedolHeader
          isOpenMenu={isOpenMenu}
          onMenuClick={() => setIsOpenMenu(!isOpenMenu)}
          white={!isOpenMenu}
        ></IsedolHeader>
      </div>
      <div className={styles.isedol_contents}>
        <IsedolMembersPage></IsedolMembersPage>
      </div>
    </div>
  );
};

export default IsedolPage;
