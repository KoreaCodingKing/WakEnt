import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRef } from 'react';
import HorizonalScroller, {
  useHorizonalScroller,
} from '../components/common/HorizonalScroller';
import LinkToIcon from '../components/common/icons/LinkTo';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import styles from '../styles/pages/index.module.scss';
import { concatClass } from '../utils/class';

const Links = [
  {
    name: 'WAKTAVERSE YouTube',
    link: 'https://www.youtube.com/c/welshcorgimessi',
  },
  {
    name: 'WAKZOO',
    link: 'https://cafe.naver.com/steamindiegame',
  },
];

const Home: NextPage = () => {
  const scroller = useRef<HTMLDivElement>(null);

  /**
   * Next.JS는 서버사이드, 클라이언트 사이드 둘 다 사용하는 구조이니 window가 없는 서버 사이드에서는 null을 사용
   */
  const [page, setPage] = useHorizonalScroller(
    typeof window !== 'undefined' ? document.body : null,
    scroller
  );

  return (
    <>
      <Head>
        <title>WAK Entertainment</title>
      </Head>
      <div className={styles.main}>
        <header>
          <WakEnterHeader></WakEnterHeader>
        </header>
        <div className='page-scroll' ref={scroller}>
          <section
            className={concatClass(styles.page, styles.flex, styles.column)}
            data-page={1}
          >
            <div className={styles.hero}>
              <h1>WAKTAVERSE.</h1>
              <p>WAK Entertainment, we are break-through.</p>
            </div>
            <div className={styles.links}>
              {Links.map(v => (
                <p
                  className={styles.link}
                  tabIndex={100}
                  onKeyDown={ev =>
                    ev.key === 'Enter' && (window.location.href = v.link)
                  }
                >
                  <Link href={v.link} passHref>
                    <span>
                      {v.name} <LinkToIcon width={22}></LinkToIcon>
                    </span>
                  </Link>
                </p>
              ))}
            </div>
          </section>
          <section className={styles.page} data-page={2}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <h1 style={{ marginBottom: 'auto' }}>두번째 페이지</h1>
              <p style={{ marginTop: 'auto' }}>페이지 마지막</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
