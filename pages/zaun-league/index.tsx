import { NextPage } from 'next';

import styles from '../../styles/components/zaun/ZaunIndex.module.scss';
import WakEnterMetadata from '../../components/wakenter/Meta';
import ZaunHeader from '../../components/zaun/ZaunHeader';
import ZaunMain from '../../components/zaun/ZaunLeagueMain';

const ZaunLeague: NextPage = (): JSX.Element => {
  return (
    <div className={styles.zaun__container}>
      <WakEnterMetadata
        title='ZAUN-LEAGUE'
        scope='LEAGUE OF ZAUN'
        description='WAK Entertainment 공식 주관 프로/아마추어 롤 리그'
        image='/images/zaun/thumbnail_zaun.png'
      ></WakEnterMetadata>
      <div className={styles.zaun_header}>
        <ZaunHeader></ZaunHeader>
      </div>
      <div className={styles.zaun_contents}>
        <ZaunMain></ZaunMain>
      </div>
    </div>
  );
};

export default ZaunLeague;