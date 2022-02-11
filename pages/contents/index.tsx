import { NextPage } from 'next';

import styles from '../../../styles/components/zaun/ZaunIndex.module.scss';
import ContentsHeader from '../../components/contents/ContentsHeader';
import { ContentsMain } from '../../components/contents/ContentsMain';
import WakEnterMetadata from '../../components/wakenter/Meta';

const Contents: NextPage = (): JSX.Element => {
  return (
    <div className={styles.contents__container}>
      <WakEnterMetadata
        title='ZAUN-LEAGUE'
        scope='LEAGUE OF ZAUN'
        description='WAK Entertainment 공식 주관 프로/아마추어 롤 리그'
        image='/images/zaun/thumbnail_zaun.png'
      ></WakEnterMetadata>
      <div className={styles.header}>
        <ContentsHeader></ContentsHeader>
      </div>
      <div className={styles.contens}>
        <ContentsMain></ContentsMain>
      </div>
    </div>
  );
};

export default Contents;