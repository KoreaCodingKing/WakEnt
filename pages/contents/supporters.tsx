import { NextPage } from 'next';

import styles from '../../styles/components/contents/Supporters.module.scss';
import parentStyles from '../../styles/pages/index.module.scss';
import WakEnterMetadata from '../../components/wakenter/Meta';
import WakEnterHeader from '../../components/wakenter/WakEnterHeader';
import PreparePage from '../../components/common/PreparePage';

const Supporters: NextPage = (): JSX.Element => {
  const flag = false; // 임시 화면

  return (
    <div className={styles.isedol__container}>
      <WakEnterMetadata
        title='WakEnter Supporters'
        scope=''
        description='왁엔터테인먼트의 후원자입니다.'
        image='/images/isedol_landing.png'
      ></WakEnterMetadata>
      <div className={styles.Supporters_contents}>
        <header className={parentStyles.whiteBackground}>
          <WakEnterHeader></WakEnterHeader>
        </header>
        {!flag && (
          <div>
            <PreparePage></PreparePage>
          </div>
        )}
        {flag && (
          <div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Supporters;
