import { NextPage } from 'next';
import { useState } from 'react';

import styles from '../../../styles/pages/discography.module.scss';
import WakEnterMetadata from '../../components/wakenter/Meta';

const ZaunLeague: NextPage = (): JSX.Element => {
  return (
    <div className={styles.zaun__container}>
      <WakEnterMetadata
        title='ZAUN-LEAGUE'
        scope='LEAGUE OF ZAUN'
        description='WAK Entertainment 공식 주관 롤 대회'
        image='/images/zaun/logo_zaun_black.png'
      ></WakEnterMetadata>
      <div className={styles.zaun_header}>
        
      </div>
      <div className={styles.isedol_contents}>
        
      </div>
    </div>
  );
};

export default ZaunLeague;