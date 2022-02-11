import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import LinkToIcon from '../components/common/icons/LinkTo';
import { IsedolLogo } from '../components/isedol/IsedolHeader';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import styles from '../styles/pages/index.module.scss';
import { classes } from '../utils/class';
import { useScrollPage } from '../components/common/Scroll';
import { useRef } from 'react';
import ChevronIcon from '../components/common/icons/Chevron';
import Centerize from '../components/common/Centerize';
import WakEnterMetadata from '../components/wakenter/Meta';

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
    logo: <h1 className={styles.big}>고정 멤버</h1>,
  },
];

const Home: NextPage = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const page = useScrollPage(scroll, process.browser ? window.innerHeight : 1, 0.05);

  const goPage = (index: number) => {
    if (!scroll.current) {
      return;
    }

    scroll.current.scrollTo({
      top: window.innerHeight * (index - 1),
      behavior: 'smooth'
    });
  };

  return (
    <>
      <WakEnterMetadata title='WAKTAVERSE'></WakEnterMetadata>
      <div className={styles.main}>
        <header>
          <WakEnterHeader white={page === 1}></WakEnterHeader>
        </header>
        <div className={styles.pages} ref={scroll}>
          <section className={classes(styles.page)} data-page={1}>
            <div className={styles.representInner}>
              <div className={styles.hero}>
                <h1>WAKTAVERSE.</h1>
                <p>WAK Entertainment, we are break-through.</p>
              </div>
              <div className={styles.links}>
                {Links.map((v, i) => (
                  <div
                    key={`main-link-${i}`}
                    className={styles.link}
                    tabIndex={100}
                    onKeyDown={ev =>
                      ev.key === 'Enter' && (window.location.href = v.link)
                    }
                  >
                    <Link href={v.link} passHref>
                      <a>
                        {v.name} <LinkToIcon width={22}></LinkToIcon>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.scrollDown} onClick={() => goPage(2)}>
              <div className={styles.inner}>
                <div className={styles.icon}>
                  <ChevronIcon bottom stroke={1}></ChevronIcon>
                </div>
                <p>밑으로 내려 WAKTAVERSE 알아보기</p>
              </div>
            </div>
          </section>
          <section
            className={classes(styles.page, styles.flex, styles.mobileColumn)}
            data-page={2}
          >
            {Groups.map((v, i) => (
              <Link key={`subsite-link-${i}`} href={v.link} passHref>
                <div className={styles.card}>
                  <Centerize>
                    <div className={styles.background}>
                      <Image
                        className={styles.image}
                        src={v.image}
                        layout='fill'
                      />
                    </div>
                  </Centerize>
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
