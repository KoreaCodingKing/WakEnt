import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import LinkToIcon from '../components/common/icons/LinkTo';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import styles from '../styles/pages/index.module.scss';
import { concatClass } from '../utils/class';
import { useRef } from 'react';

const Links = [
  {
    name: '메인 화면으로',
    link: '/',
  },
  {
    name: '왁물원으로',
    link: 'https://cafe.naver.com/steamindiegame',
  },
];

const Home: NextPage = () => {
  const scroll = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>500 - WAK Entertainment</title>
      </Head>
      <div className={styles.main}>
        <header>
          <WakEnterHeader></WakEnterHeader>
        </header>
        <div className={styles.pages} ref={scroll}>
          <section className={concatClass(styles.page)} data-page={1}>
            <div className={styles.representInner}>
              <div className={styles.hero}>
                <h1>500</h1>
                <p>서버에 오류가 발생했습니다. 나중에 다시 시도하세요.</p>
              </div>
              <div className={styles.links}>
                {Links.map((v, i) => (
                  <p
                    key={`main-link-${i}`}
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
