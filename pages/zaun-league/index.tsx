import { NextPage } from 'next';

import styles from '../../../styles/pages/discography.module.scss';
import WakEnterMetadata from '../../components/wakenter/Meta';
import ZaunHeader from '../../components/zaun/ZaunHeader';

const ZaunLeague: NextPage = (): JSX.Element => {
  return (
    <div className={styles.zaun__container}>
      <WakEnterMetadata
        title='ZAUN-LEAGUE'
        scope='LEAGUE OF ZAUN'
        description='WAK Entertainment 공식 주관 프로/아마추어 롤 리그'
        image='/images/zaun/logo_zaun_black.png'
      ></WakEnterMetadata>
      <div className={styles.zaun_header}>
        <ZaunHeader></ZaunHeader>
      </div>
      <div className={styles.zaun_contents}>
        
      </div>
    </div>
  );
};

export default ZaunLeague;