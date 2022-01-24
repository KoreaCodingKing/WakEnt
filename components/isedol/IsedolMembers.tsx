import React, { useEffect, useRef, useState, useCallback } from "react";
import { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/components/isedol/IsedolMembers.module.scss";
import Head from "next/head";
import Centerize from "../common/Centerize";
import { WakEnterLogo } from "../wakenter/WakEnterHeader";
import Link from "next/link";
import { useRouter } from "next/router";
import { concatClass } from "../../utils/class";
import { useHorizonalPageScroller } from "../common/Scroll";

import { useHashState } from "../../utils/hashState";
import { Member, MemberID, Members } from "../../structs/member";
import ModelSlider from "../common/ModelSlider";

import InstagramIcon from "../../public/images/icons/services/instagram.png";
import SoundCloudIcon from "../../public/images/icons/services/soundcloud.png";
import TwitchIcon from "../../public/images/icons/services/twitch.png";
import TwitterIcon from "../../public/images/icons/services/twitter.png";
import YouTubeIcon from "../../public/images/icons/services/youtube.png";
import { motion } from "framer-motion";

const isNotNull = <T extends unknown>(elem: T | null): elem is T => {
  return elem !== null;
};

const useNonNullState = <T extends unknown>(state: T) => {
  const [nstate, setNState] = useState<T>(state);

  useEffect(() => {
    if (state === null) {
      return;
    }

    setNState(state);
  }, [state]);

  return nstate;
};

const useRect = (ref: React.RefObject<HTMLDivElement>) => {
  const [elem, setElem] = useState<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<[DOMRect | undefined, DOMRect | undefined]>([
    undefined,
    undefined,
  ]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setElem(ref.current);
  }, [ref.current]);

  useEffect(() => {
    if (!elem) {
      return;
    }

    const handler = () => {
      const r = elem.querySelector(`.${styles.member}[data-active="true"]`);

      setRect([elem.getBoundingClientRect(), r?.getBoundingClientRect()]);
    };

    requestAnimationFrame(() => {
      handler();
    });

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [elem]);

  return rect;
};

interface DetailMemberCSS extends React.CSSProperties {
  "--left": string;
  "--top": string;
  "--width": string;
}

const SocialIcons: Record<string, StaticImageData> = {
  instagram: InstagramIcon,
  soundcloud: SoundCloudIcon,
  twitch: TwitchIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
};

const useIntersectionObserver = (
  target: React.RefObject<HTMLDivElement>,
  active: boolean,
  onIntersect?: (id: MemberID | null) => void
): void => {
  const [observer, setObserver] = useState<IntersectionObserver>(null!);

  useEffect(() => {
    if (!process.browser) {
      return;
    }

    const localObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (
            entry.target as HTMLElement
          ).dataset.active = `${entry.isIntersecting}`;

          if (entry.isIntersecting) {
            onIntersect &&
              onIntersect(
                (entry.target as HTMLElement).dataset.member as MemberID
              );
          }
        });
      },
      {
        root: target.current,
        threshold: 0.5,
      }
    );

    setObserver(localObserver);

    return () => {
      localObserver.disconnect();
    };
  }, [onIntersect]);

  useEffect(() => {
    if (!active) {
      onIntersect && onIntersect(null);

      return;
    }

    if (!observer) return;

    const childTargets = target.current!.querySelectorAll(`.${styles.member}`);
    childTargets.forEach((child) => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [active, observer]);
};

export const IsedolMembers: NextPage = () => {
  const [chosenMember, setChosenMember] = useHashState<MemberID | null>(null);
  const previousMember = useNonNullState(chosenMember);

  const [currentHoverMember, setCurrentHoverMember] = useState<MemberID | null>(
    null
  );

  const container = useRef<HTMLDivElement>(null);
  const member = useRef<HTMLDivElement>(null);

  const membersCardCache: HTMLElement[] = [];
  const router = useRouter();

  const [parentRect, cardRect] = useRect(member);

  const [mobileActive, mobilePage] = useHorizonalPageScroller(
    container,
    1124,
    membersCardCache,
    () => {
      return chosenMember === null;
    }
  );

  const onIntersect = useCallback((id) => {
    setCurrentHoverMember(id);
  }, []);

  useIntersectionObserver(container, mobileActive, onIntersect);

  useEffect(() => {
    container.current!.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [chosenMember]);

  useEffect(() => {
    if (!mobileActive || chosenMember) {
      return;
    }

    requestAnimationFrame(() => {
      const card = (member.current!.querySelector(`.${styles.member}:first-child`) as HTMLElement);
      card.dataset.active = 'true';
      setCurrentHoverMember(card.dataset.member as MemberID);
    });
  }, [chosenMember, mobileActive]);

  let hoverTimeout = 0;

  return (
    <div className={styles.isedol_members__container}>
      <Head>
        <meta
          name="theme-color"
          content={
            currentHoverMember ? Members[currentHoverMember].color : "#0A0A0B"
          }
        ></meta>
      </Head>
      <div className={styles.preload}>
        {Object.keys(SocialIcons).map((key) => (
          <Image
            key={`icons-${key}`}
            src={SocialIcons[key].src}
            width={30}
            height={30}
          ></Image>
        ))}
      </div>
      <div
        className={concatClass(
          styles.inner_container,
          chosenMember !== null && styles.active
        )}
        data-member={currentHoverMember || chosenMember}
        ref={container}
      >
        <div
          className={concatClass(
            styles.members_list,
            chosenMember !== null && styles.chosen,
            mobileActive && styles.mobile
          )}
          ref={member}
          data-member={chosenMember}
        >
          {Object.keys(Members).map((id, i) => {
            const member = Members[id as MemberID];

            return (
              <>
                <motion.div
                  key={`member-card-${id}`}
                  className={concatClass(
                    styles.member,
                    !!chosenMember && chosenMember !== id && styles.disappear
                  )}
                  data-member={id}
                  ref={(element: HTMLDivElement) =>
                    element && membersCardCache.push(element)
                  }
                  data-active={
                    currentHoverMember === null || id === currentHoverMember
                  }
                  onMouseEnter={() =>
                    (!mobileActive &&
                      chosenMember === null &&
                      clearTimeout(hoverTimeout)) ||
                    setCurrentHoverMember(id as MemberID)
                  }
                  onMouseOut={() =>
                    !mobileActive &&
                    chosenMember === null &&
                    (() => {
                      hoverTimeout = setTimeout(() => {
                        setCurrentHoverMember(null);
                      }, 60) as unknown as number;
                    })()
                  }
                  onClick={(
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    if (chosenMember) {
                      setChosenMember(null);
                      return;
                    }

                    if (mobileActive && container.current) {
                      container.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }

                    setChosenMember(id as MemberID);
                  }}
                >
                  <div className={styles.background}>
                    <Centerize>
                      <div className={styles.member_image_wrapper}>
                        <Image
                          className={styles.member_image}
                          src={member.image}
                          layout="fill"
                          priority
                          placeholder="blur"
                          blurDataURL={member.image}
                          alt={member.name.ko}
                        ></Image>
                      </div>
                    </Centerize>
                  </div>
                  <div className={styles.sign_box} data-member={id}>
                    <div className={styles.arrow_wrapper}>
                      <Image
                        className={styles.sign_arrow}
                        src={
                          i % 2 === 0
                            ? "/images/icons/ico_card_arrow_tail.svg"
                            : "/images/icons/ico_card_arrow.svg"
                        }
                        layout="fill"
                        alt="사인 arrow"
                        priority
                      ></Image>
                    </div>
                    <p className={styles.sign_name}>
                      <Image
                        className={styles.member_sign_name}
                        src={member.signNameImage}
                        layout="fill"
                        alt={`${member.name.ko}`}
                        priority
                      ></Image>
                    </p>
                    <div className={styles.sign_wrapper}>
                      <Image
                        className={styles.member_sign}
                        src={member.signImage}
                        layout="fill"
                        alt={`${member.name.ko} 싸인`}
                      ></Image>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
        {previousMember && (
          <div
            className={concatClass(
              styles.member_detail,
              isNotNull(chosenMember) && styles.active
            )}
            style={
              {
                "--left": parentRect && `${parentRect.left + 32}px`,
                "--top": cardRect && `${cardRect.top}px`,
                "--width": cardRect && `${cardRect.width}px`,
                "--height": cardRect && `${cardRect.height}px`,
              } as DetailMemberCSS
            }
          >
            <div className={styles.profile}>
              <div className={styles.profile_box}>
                <div className={styles.profile_name}>
                  <h1>{Members[previousMember].name.ko}</h1>
                  <p className={styles.sub}>
                    {Members[previousMember].name.en}
                  </p>
                </div>
                <div className={styles.profile_detail}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Color</td>
                        <td>{Members[previousMember].metadata.color}</td>
                      </tr>
                      <tr>
                        <td>Birth</td>
                        <td>{Members[previousMember].metadata.birth}</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{Members[previousMember].metadata.height}cm</td>
                      </tr>
                      <tr>
                        <td>Blood</td>
                        <td>{Members[previousMember].metadata.blood}</td>
                      </tr>
                      <tr>
                        <td>MBTI</td>
                        <td>{Members[previousMember].metadata.mbti}</td>
                      </tr>
                      <tr>
                        <td>Fandom</td>
                        <td>{Members[previousMember].metadata.fandom}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={styles.social_box}></div>
                </div>
                <div className={styles.social_links}>
                  {Members[previousMember].links.map((link) =>
                    link.icon ? (
                      <Link
                        key={`social-link-${link.link}-${link.icon}`}
                        href={link.link}
                      >
                        <a className={styles.icon} target="_blank">
                          {(SocialIcons[link.icon] && (
                            <Image
                              src={SocialIcons[link.icon]}
                              width={30}
                              height={30}
                              alt={`${link.name} 링크`}
                              priority
                            ></Image>
                          )) ??
                            link.name}
                        </a>
                      </Link>
                    ) : (
                      <div
                        key={`social-link-${link.link}-${link.icon}`}
                        className={styles.link}
                      >
                        {link.name}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className={styles.profile_sign_wrapper}>
                <Image
                  className={styles.member_sign}
                  src={Members[previousMember].signImage}
                  layout="fill"
                  alt={`${Members[previousMember].name.ko} 싸인`}
                ></Image>
              </div>
              <div className={styles.model_viewer}>
                <ModelSlider
                  models={Members[previousMember].modelImages}
                  white
                ></ModelSlider>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link key={"link-wak-enter"} href={"/"} passHref>
        <div
          className={styles.logo}
          tabIndex={100}
          onKeyDown={(ev) => ev.key === "Enter" && router.push("/")}
        >
          <WakEnterLogo white></WakEnterLogo>
        </div>
      </Link>
    </div>
  );
};

export default IsedolMembers;
