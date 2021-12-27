import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import LinkToIcon from '../components/common/icons/LinkTo';
import { IsedolLogo } from '../components/isedol/IsedolHeader';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import styles from '../styles/pages/index.module.scss';
import { concatClass } from '../utils/class';
import { useScrollPage } from '../components/common/Scroll';
import { useRef } from 'react';

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

const Groups = [
  {
    name: '이세계 아이돌',
    link: '/isedol',
    image: '/images/bg_rewind.jpg',
    disabled: false,
    logo: <IsedolLogo big white></IsedolLogo>,
  },
  {
    name: '고정 멤버',
    link: '/gomem',
    image: '/images/bg_gomem.jpg',
    disabled: true,
    logo: <h1>고정 멤버</h1>,
  },
];

const Home: NextPage = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const page = useScrollPage(scroll, process.browser ? window.innerHeight : 1, 0.05);

  return (
    <>
      <Head>
        <title>WAK Entertainment</title>
      </Head>
      <div className={styles.main}>
        <header>
          <WakEnterHeader white={page === 1}></WakEnterHeader>
        </header>
        <div className={styles.pages} ref={scroll}>
          <section className={concatClass(styles.page)} data-page={1}>
            <div className={styles.representInner}>
              <div className={styles.hero}>
                <h1>WAKTAVERSE.</h1>
                <p>WAK Entertainment, we are break-through.</p>
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
          <section
            className={concatClass(styles.page, styles.flex, styles.mobileColumn)}
            data-page={2}
          >
            {Groups.map((v, i) => (
              <Link key={`subsite-link-${i}`} href={v.link} passHref>
                <div className={styles.card}>
                  <div className={styles.background}>
                    <Image
                      className={styles.image}
                      src={v.image}
                      layout='fill'
                    />
                  </div>
                  <div className={styles.contents}>{v.logo}</div>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
