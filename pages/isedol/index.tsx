import { NextPage } from "next";
import { useState } from "react";

import styles from "../../styles/components/isedol/IsedolIndex.module.scss";
import IsedolHeader from "../../components/isedol/IsedolHeader";
import Main from "../../components/isedol/IsedolMain";
import IsedolMenuOverlay from "../../components/isedol/IsedolMenuOverlay";
import WakEnterMetadata from "../../components/wakenter/Meta";

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.isedol__container}>
      <WakEnterMetadata
        title="이세계아이돌"
        scope=""
        description="2021년 8월에 결성된 6인조 버츄얼 아이돌 그룹, 이세계아이돌입니다."
        image="/images/isedol_landing.png"
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
        <Main></Main>
      </div>
    </div>
  );
};

export default IsedolPage;
