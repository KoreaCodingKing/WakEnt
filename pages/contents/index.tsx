import { NextPage } from 'next';

import styles from '../../styles/pages/index.module.scss';
import ContentsHeader from '../../components/contents/ContentsHeader';
import ContentsMain from '../../components/contents/ContentsMain';

const Contents: NextPage = (): JSX.Element => {

  return (
    <div className={styles.contents__container}>
      <div className={styles.main}>
        <header>
          <ContentsHeader></ContentsHeader>
        </header>
        <ContentsMain></ContentsMain>
      </div>
    </div>
  );
};

export default Contents;