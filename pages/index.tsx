import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import LinkToIcon from '../components/common/icons/LinkTo';
import { IsedolLogo } from '../components/isedol/IsedolHeader';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import styles from '../styles/pages/index.module.scss';
import { classes } from '../utils/class';
import { useScrollPage } from '../components/common/Scroll';
import { useCallback, useEffect, useRef, useState } from 'react';
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
    name: {
      ko: '이세계 아이돌',
      en: 'ISEGYE IDOL'
    },
    links: [
      {
        name: '이세돌 상세 페이지',
        link: '/isedol',
      },
      {
        name: '공식 유튜브 채널',
        link: 'https://www.youtube.com/c/welshcorgimessi',
      },
    ],
    image: '/images/bg_rewind.jpg',
    description: '오디션을 걸쳐 선발된 가상 아이돌 그룹.\n활발한 커버송 공개, 음원 발매 및 트위치 방송 활동을 기반으로 여러분들께 기쁨을 선사해드립니다.',
    
  },
  {
    name: {
      ko: '고정멤버',
      en: 'SEASON2'
    },
    links: [
      {
        name: '고정멤버 상세 페이지',
        link: '/gomem',
      },
      {
        name: '공식 유튜브 채널',
        link: 'https://www.youtube.com/c/welshcorgimessi',
      },
    ],
    image: '/images/bg_gomem.jpg',
    description: '왁타버스 세계관의 주력이 되는 그룹.\n왁타버스 합동 방송 참여 및 상황극 등 컨텐츠를 개발하여 여러분들에게 즐거움을 선사해드립니다.',
    
  },
];

const Home: NextPage = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const page = useScrollPage(scroll, process.browser ? window.innerHeight : 1, 0.05);

  const goPage = useCallback((index: number) => {
    if (!scroll.current) {
      return;
    }

    console.log(page)
    scroll.current.scrollTo({
      top: window.innerHeight * (index),
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <WakEnterMetadata title='WAKTAVERSE'></WakEnterMetadata>
      <div className={styles.main}>
        <header>
          <WakEnterHeader></WakEnterHeader>
        </header>
        <div className={styles.pages} ref={scroll}>
          <section className={classes(styles.page)} data-page={1}>
            <div className={styles.representInner}>
              <div className={styles.hero}>
                <p>메타버스의 선두자</p>
                <p>메타버스의 현재</p>
                <h1>WAKTAVERSE.</h1>
                <p>WakEntertainment with Metaverse</p>
              </div>
              <div className={styles.scrollDown} onClick={() => goPage(1)}>
                <div className={styles.inner}>
                  <div className={styles.icon}>
                    <ChevronIcon bottom stroke={1}></ChevronIcon>
                  </div>
                  <p>WAKTAVERSE 알아보기</p>
                </div>
              </div>
            </div>
          </section>
          <section key={`group-section-${1}`}
            className={classes(styles.page, styles.flex, styles.mobileColumn)}
            data-page={1}>
            <div className={classes(styles.representInner, styles.group)}>
              <div className={styles.section_title}>
                <h2>{Groups[0].name.ko}<span>{Groups[0].name.en}</span></h2>
                <p>{Groups[0].description}</p>
              </div>
              <div className={styles.links}>
                {Groups[0].links.map((v, i) => (
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
              <div className={styles.cards_box}>

              </div>
            </div>
          </section>
          <section key={`group-section-${2}`}
            className={classes(styles.page, styles.flex, styles.mobileColumn)}
            data-page={2}>
            <div className={classes(styles.representInner, styles.group)}>
              <div className={styles.section_title}>
                <h2>{Groups[1].name.ko}<span>{Groups[1].name.en}</span></h2>
                <p>{Groups[1].description}</p>
              </div>
              <div className={styles.links}>
                {Groups[1].links.map((v, i) => (
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
              <div className={styles.cards_box}>
                
              </div>
            </div>
          </section>
          {/* {Groups.map((group, i) => {
            return (
              <section key={`group-section-${i}`}
                className={classes(styles.page, styles.flex, styles.mobileColumn)}
                data-page={i+2}>
                <div className={classes(styles.representInner, styles.group)}>
                  <div className={styles.section_title}>
                    <h2>{group.name.ko}<span>{group.name.en}</span></h2>
                    <p>{group.description}</p>
                  </div>
                  <div className={styles.links}>
                    {group.links.map((v, i) => (
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
              </section>
            );
          })} */}
        </div>
        <div className={styles.navigation_box}>
          <ul className={styles.navigations}>
            <li className={styles.navigation}
              onClick={() => goPage(0)}
              style={{
                '--backgroundColor': page === 0 ? '#000' : 'none'
              } as React.CSSProperties}
            ></li>
            {Groups.map((_, i) => {
              return (
                <li key={`nav-index-${i}`}
                  className={styles.navigation}
                  style={{
                    '--backgroundColor': page === i+1 ? '#000' : 'none'
                  } as React.CSSProperties}
                  onClick={() => goPage(i+1)}
                ></li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
