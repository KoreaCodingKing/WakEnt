import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import LinkToIcon from "../components/common/icons/LinkTo";

import WakEnterHeader from "../components/wakenter/WakEnterHeader";
import styles from "../styles/pages/index.module.scss";
import { classes } from "../utils/class";
import { useScrollPage } from "../components/common/Scroll";
import { useCallback, useEffect, useRef, useState } from "react";
import ChevronIcon from "../components/common/icons/Chevron";
import WakEnterMetadata from "../components/wakenter/Meta";
import { useDebouncer } from "../components/isedol/Members/Utils";

const Groups = [
  {
    name: {
      ko: "이세계 아이돌",
      en: "ISEGYE IDOL",
    },
    links: [
      {
        name: "이세돌 상세 페이지",
        link: "/isedol",
      },
      {
        name: "공식 유튜브 채널",
        link: "https://www.youtube.com/c/welshcorgimessi",
      },
    ],
    albumImage: "/images/album/winter-spring.jpg",
    membersImage: [
      "/images/member/total_member.png",
      "/images/member/total_member1.png",
    ],
    description:
      "오디션을 걸쳐 선발된 가상 아이돌 그룹.\n현재까지 활발히 음반 및 방송 활동을 진행하며 꾸준한 인기를 모으고 있습니다.",
  },
  {
    name: {
      ko: "고정멤버",
      en: "SEASON3",
    },
    links: [
      {
        name: "고정멤버 상세 페이지",
        link: "/gomem",
      },
      {
        name: "공식 유튜브 채널",
        link: "https://www.youtube.com/c/welshcorgimessi",
      },
    ],
    videos: [
      {
        link: "https://www.youtube.com/watch?v=Ru2Mx7xFgRc",
      },
      {
        link: "https://www.youtube.com/watch?v=Kc85nOaqLwo",
      },
    ],
    image: "/images/bg_gomem.jpg",
    membersImage: ["/images/bg_gomem.jpg", "/images/bg_gomem1.jpg"],
    description:
      "왁타버스 세계관의 주력이 되는 그룹.\n왁타버스 합동 방송 참여 및 상황극 등 컨텐츠를 개발하여 여러분들에게 즐거움을 선사드립니다.",
  },
];

const Home: NextPage = () => {
  const scroll = useRef<HTMLDivElement>(null!);
  const page = useScrollPage(
    scroll,
    process.browser ? window.innerHeight : 1,
    0.4
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const goPage = useCallback((index: number) => {
    if (!scroll.current) {
      return;
    }

    scroll.current.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const pageHandler = () => {
      scroll.current.scrollTo({
        top: window.innerHeight * page,
        behavior: "smooth",
      });
    };
    window.addEventListener("resize", pageHandler);

    return () => {
      window.removeEventListener("resize", pageHandler);
    };
  }, [page]);

  const [run] = useDebouncer((index: number) => {
    setCurrentImageIndex(index);
  }, 60);

  const showImageHandler = useCallback(
    (groupsMemberImg: string[]) => {
      if (currentImageIndex === groupsMemberImg.length - 1) {
        run(0);
        return;
      }
      run(currentImageIndex + 1);
    },
    [currentImageIndex, run]
  );

  return (
    <>
      <WakEnterMetadata title="WAK Entertainment"></WakEnterMetadata>
      <div className={styles.main}>
        <header>
          <WakEnterHeader></WakEnterHeader>
        </header>
        <div className={styles.pages} ref={scroll}>
          <section className={classes(styles.page)} data-page={1}>
            <div className={classes(styles.representInner, styles.group)}>
              <div className={styles.hero}>
                <p>메타버스의 선구자</p>
                <p>메타버스의 현재</p>
                <h1>WAKTAVERSE.</h1>
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
          <section
            key={`group-section-${1}`}
            className={classes(styles.page, styles.flex, styles.mobileColumn)}
            data-page={1}
          >
            <div
              className={classes(
                styles.representInner,
                styles.group,
                styles.secondSection
              )}
            >
              <div className={styles.sectionTitle}>
                <h2>
                  {Groups[0].name.ko}
                  <span>{Groups[0].name.en}</span>
                </h2>
                <p>{Groups[0].description}</p>
              </div>
              <div className={styles.links}>
                {Groups[0].links.map((v, i) => (
                  <div
                    key={`main-link-${i}`}
                    className={styles.link}
                    tabIndex={100}
                    onKeyDown={(ev) =>
                      ev.key === "Enter" && (window.location.href = v.link)
                    }
                  >
                    <Link href={v.link} passHref>
                      <a>
                        {v.name} <LinkToIcon width={16}></LinkToIcon>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
              <div
                className={classes(styles.firstSection_cards, styles.cards_box)}
              >
                <div className={styles.card}>
                  <div className={classes(styles.img_box, styles.logo_img)}>
                    <Image
                      src={"/images/logo_isedol.png"}
                      layout="fill"
                      blurDataURL={"/images/logo_isedol.png"}
                      placeholder="blur"
                      priority
                    ></Image>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.img_box}>
                    <Image src={Groups[0].albumImage!} layout="fill"></Image>
                  </div>
                </div>
                <div
                  className={styles.card}
                  onClick={() => showImageHandler(Groups[0].membersImage!)}
                >
                  <div className={styles.img_box}>
                    {Groups[0].membersImage &&
                      Groups[0].membersImage.map((v: string, i: number) => (
                        <Image
                          key={`background-image-${i}`}
                          className={classes(
                            styles.image,
                            currentImageIndex === i && styles.active
                          )}
                          src={v}
                          layout="fill"
                          blurDataURL={v}
                          placeholder="blur"
                          priority
                        ></Image>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            key={`group-section-${2}`}
            className={classes(styles.page, styles.flex, styles.mobileColumn)}
            data-page={2}
          >
            <div className={classes(styles.representInner, styles.group)}>
              <div className={styles.sectionTitle}>
                <h2>
                  {Groups[1].name.ko}
                  <span>{Groups[1].name.en}</span>
                </h2>
                <p>{Groups[1].description}</p>
              </div>
              <div className={styles.links}>
                {Groups[1].links.map((v, i) => (
                  <div
                    key={`main-link-${i}`}
                    className={styles.link}
                    tabIndex={100}
                    onKeyDown={(ev) =>
                      ev.key === "Enter" && (window.location.href = v.link)
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
              <div className={styles.secondSection_cards}>
                <div
                  className={styles.card}
                  onClick={() => showImageHandler(Groups[1].membersImage!)}
                >
                  <div className={styles.img_box}>
                    {Groups[1].membersImage &&
                      Groups[1].membersImage.map((v: string, i: number) => (
                        <Image
                          key={`background-image-${i}`}
                          className={classes(
                            styles.image,
                            currentImageIndex === i && styles.active
                          )}
                          src={v}
                          layout="fill"
                          blurDataURL={v}
                          placeholder="blur"
                          priority
                        ></Image>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section key={`group-section-${2}`}
            className={classes(styles.page, styles.flex, styles.mobileColumn, styles.shorts)}
            data-page={2}>

          </section> */}
        </div>
        <div className={styles.navigation_box}>
          <ul className={styles.navigations}>
            <li
              className={classes(
                styles.navigation,
                page === 0 ? styles.selected : ""
              )}
              onClick={() => goPage(0)}
            ></li>
            {Groups.map((_, i) => {
              return (
                <li
                  key={`nav-index-${i}`}
                  className={classes(
                    styles.navigation,
                    page === i + 1 ? styles.selected : ""
                  )}
                  onClick={() => goPage(i + 1)}
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
