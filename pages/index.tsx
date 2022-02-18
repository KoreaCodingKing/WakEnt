import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import LinkToIcon from '../components/common/icons/LinkTo';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import styles from '../styles/pages/index.module.scss';
import { classes } from '../utils/class';
import { useScrollPage } from '../components/common/Scroll';
import { useCallback, useEffect, useRef, useState } from 'react';
import ChevronIcon from '../components/common/icons/Chevron';
import WakEnterMetadata from '../components/wakenter/Meta';
import { Card } from '../components/common/Cards';
import FadeInImage from '../components/common/FadeInImage';
import { getLinkType, getYouTubeThumbnailURL, LinkType } from '../structs/links';

// ToDo: remove Achive codes
// const Links = [
//   {
//     name: 'WAKTAVERSE YouTube',
//     link: 'https://www.youtube.com/c/welshcorgimessi',
//   },
//   {
//     name: 'WAKZOO',
//     link: 'https://cafe.naver.com/steamindiegame',
//   },
// ];

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
    description: '오디션을 걸쳐 선발된 가상 아이돌 그룹.\n활발한 커버송 공개, 음원 발매 및 트위치 방송 활동을 기반으로 여러분들께 기쁨을 선사드립니다.',

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
    videos: [
      {
        link: 'https://www.youtube.com/watch?v=Ru2Mx7xFgRc'
      },
      {
        link: 'https://www.youtube.com/watch?v=Kc85nOaqLwo'
      }
    ],
    image: '/images/bg_gomem.jpg',
    description: '왁타버스 세계관의 주력이 되는 그룹.\n왁타버스 합동 방송 참여 및 상황극 등 컨텐츠를 개발하여 여러분들에게 즐거움을 선사드립니다.',

  },
];

const Home: NextPage = () => {
  const scroll = useRef<HTMLDivElement>(null);
  const page = useScrollPage(scroll, process.browser ? window.innerHeight : 1, 0.05);
  const minHeight = '224';

  const goPage = useCallback((index: number) => {
    if (!scroll.current) {
      return;
    }

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
                <Card
                  index={0}
                  flex
                  center
                  normalSize
                  template="1 1 1 3"
                  mobileTemplate="1 1 2 3"
                  className={styles.descriptionCard}
                  backgroundColor='#F5F5F5'
                  minHeight={minHeight}
                >
                  <div className={styles.img_box}>
                    <Image
                      src={'/images/logo_isedol.png'}
                      layout='fill'></Image>
                  </div>
                </Card>
                <Card
                  index={1}
                  flex
                  center
                  normalSize
                  template="1 1 3 6"
                  mobileTemplate="1 1 2 3"
                  className={styles.descriptionCard}
                  backgroundColor='#F5F5F5'
                  minHeight={minHeight}
                >
                  <div className={classes(styles.img_box, styles.album)}>
                    <Image
                      src={'/images/album/rewind.jpg'}
                      layout='fill'></Image>
                  </div>
                </Card>
                <Card
                  index={2}
                  flex
                  center
                  normalSize
                  template="auto auto 1 6"
                  mobileTemplate="1 1 2 3"
                  className={styles.descriptionCard}
                  backgroundColor='#F5F5F5'
                  minHeight={minHeight}
                >
                  <div className={styles.img_box}>
                    <Image
                      src={'/images/logo_isedol.png'}
                      layout='fill'
                      blurDataURL={'/images/logo_isedol.png'}
                      placeholder='blur'
                      priority></Image>
                  </div>
                </Card>
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
                {Groups[1].videos!.map((link, index) => {
                  const linkType = getLinkType(link.link);

                  let image = '';

                  if (linkType === LinkType.YouTube) {
                    image = getYouTubeThumbnailURL(link.link);
                  }

                  return (
                    <Card
                      key={`card-${index}`}
                      index={3 + index}
                      padding
                      thumbnail={image.length > 0}
                      template="auto auto auto auto"
                      mobileTemplate={`auto auto ${4 + index} ${
                        5 + index
                      }`}
                      backgroundColor='#000'
                      minHeight={minHeight}
                    >
                      <Link href={link.link} passHref>
                        <a target="_blank">
                          <FadeInImage
                            src={image}
                            layout="fill"
                          ></FadeInImage>
                        </a>
                      </Link>
                    </Card>
                  );
                })
                }
              </div>
            </div>
          </section>
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
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
