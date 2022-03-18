import { NextPage } from 'next';

import styles from '../../styles/pages/index.module.scss';
import ContentsHeader from '../../components/contents/ContentsHeader';
import { ContentsMain } from '../../components/contents/ContentsMain';
import PreparePage from '../../components/common/PreparePage';

const Contents: NextPage = (): JSX.Element => {
  const flag = true; // 임시 화면

  return (
    <div className={styles.contents__container}>
      {!flag && (
        <div>
          <PreparePage></PreparePage>
        </div>
      )}
      {flag && (
        <div className={styles.main}>
          <header>
            <ContentsHeader white></ContentsHeader>
          </header>
          <ContentsMain></ContentsMain>
        </div>
      )}
    </div>
  );
};

export default Contents;