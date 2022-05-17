import { NextPage } from "next";

import styles from "../../styles/pages/index.module.scss";
import ContentsMain from "../../components/contents/ContentsMain";
import WakEnterMetadata from "../../components/wakenter/Meta";

const Contents: NextPage = (): JSX.Element => {
  return (
    <div className={styles.contents__container}>
      <WakEnterMetadata
        title="Contents - Wak Entertainment"
        scope=""
        description="왁 엔터테인먼트의 컨텐츠들를 모았습니다. Wak Entertainment's contents"
      ></WakEnterMetadata>
      <div className={styles.main}>
        <ContentsMain></ContentsMain>
      </div>
    </div>
  );
};

export default Contents;
