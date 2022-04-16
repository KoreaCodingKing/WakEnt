import { NextPage } from 'next';

import styles from '../../styles/components/contents/Goods.module.scss';
import WakEnterMetadata from '../../components/wakenter/Meta';
import GoodsMain from '../../components/contents/GoodsMain';
import ContentsHeader from '../../components/contents/ContentsHeader';

const Goods: NextPage = () => {
  return (
    <div className={styles.goods_container}>
      <WakEnterMetadata
        title='WakEnter Goods'
        scope=''
        description='왁엔터테인먼트에서 추억을 쌓으세요.'
        image='/images/landing.png'
      ></WakEnterMetadata>
      <header>
        <ContentsHeader fitHeight={true}></ContentsHeader>
      </header>
      <GoodsMain></GoodsMain>
    </div>
  );
};

export default Goods;
