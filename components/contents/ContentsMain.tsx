import { NextPage } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/router';

import styles from '../../styles/components/contents/ContentsMain.module.scss';

export const ContentsMain: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.contents}>
        <div className={styles.title}>
          <h1>WakEntertainment's Contents</h1>
          <h2>왁타버스 매력에 빠져보세요!</h2>
        </div>
        <div className={styles.link_box}>
          <Link href='/contents/list' passHref>
            <a className={styles.link}>컨텐츠 보러 가기</a>  
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentsMain;