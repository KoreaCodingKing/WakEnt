import { NextPage } from 'next';

import styles from '../styles/components/wakenter/WakEnterGoods.module.scss';
import parentStyles from '../styles/pages/index.module.scss';
import WakEnterMetadata from '../components/wakenter/Meta';
import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import PreparePage from '../components/common/PreparePage';

const IsedolPage: NextPage = (): JSX.Element => {
  const flag = false; // 임시 화면

  return (
    <div className={styles.isedol__container}>
      <WakEnterMetadata
        title='WakEnter Goods'
        scope=''
        description='왁엔터테인먼트에서 추억을 쌓으세요.'
        image='/images/isedol_landing.png'
      ></WakEnterMetadata>
      <div className={styles.goods_contents}>
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

export default IsedolPage;
