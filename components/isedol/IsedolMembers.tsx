import React, { useEffect, useRef, useState, useCallback } from 'react';
import { NextPage } from 'next';

import Image from 'next/image';
import Head from 'next/head';

import { motion } from 'framer-motion';

import styles from '../../styles/components/isedol/IsedolMembers.module.scss';

import { IsedolMemberID, Members } from '../../structs/member';
import Centerize from '../common/Centerize';
import { useHorizonalPageScroller } from '../common/Scroll';
import ModelSlider from '../common/ModelSlider';

import { useHashState, useNonNullState } from '../../utils/state';
import { concatClass } from '../../utils/class';

import { WakEnterLogoLink } from '../wakenter/WakEnterHeader';
import { useIntersectionObserver } from './Members/Observer';
import SocialLink from './Members/SocialLink';

const useRect = (ref: React.RefObject<HTMLDivElement>) => {
  const [rect, setRect] = useState<[DOMRect | undefined, DOMRect | undefined]>([
    undefined,
    undefined,
  ]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const handler = () => {
      const r = ref.current!.querySelector(
        `.${styles.member}[data-active="true"]`
      );

      setRect([
        ref.current!.getBoundingClientRect(),
        r?.getBoundingClientRect(),
      ]);
    };

    requestAnimationFrame(() => {
      handler();
    });

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [ref]);

  return rect;
};

interface DetailMemberCSS extends React.CSSProperties {
  '--left': string
  '--top': string
  '--width': string
}

export const IsedolMembers: NextPage = () => {
  const [chosenMember, setChosenMember] = useHashState<IsedolMemberID | null>(
    null
  );
  const previousMember = useNonNullState(chosenMember);

  const [
    currentHoverMember,
    setCurrentHoverMember,
  ] = useState<IsedolMemberID | null>(null);

  const container = useRef<HTMLDivElement>(null);
  const member = useRef<HTMLDivElement>(null);

  const membersCardCache: HTMLElement[] = [];

  const [parentRect, cardRect] = useRect(member);

  const activeOn = useCallback(() => {
    return chosenMember === null;
  }, [chosenMember]);

  const [mobileActive] = useHorizonalPageScroller(
    container,
    1124,
    membersCardCache,
    activeOn
  );

  const onIntersect = useCallback(id => {
    setCurrentHoverMember(id);
  }, []);

  useIntersectionObserver(
    container,
    `.${styles.member}`,
    mobileActive && activeOn(),
    onIntersect
  );

  const scrollToTop = useCallback(() => {
    container.current!.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [container]);

  useEffect(() => {
    scrollToTop();
  }, [chosenMember, scrollToTop]);

  useEffect(() => {
    if (!mobileActive || chosenMember) {
      return;
    }

    requestAnimationFrame(() => {
      const card = member.current!.querySelector(
        `.${styles.member}:first-child`
      ) as HTMLElement;
      card.dataset.active = 'true';
      setCurrentHoverMember(card.dataset.member as IsedolMemberID);
    });
  }, [chosenMember, mobileActive]);

  let hoverTimeout = 0;

  return (
    <div className={styles.isedol_members__container}>
      <Head>
        <meta
          name='theme-color'
          content={
            currentHoverMember
              ? Members[currentHoverMember].backgroundColor
              : '#0A0A0B'
          }
        ></meta>
      </Head>
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
            const member = Members[id as IsedolMemberID];

            return (
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
                  setCurrentHoverMember(id as IsedolMemberID)
                }
                onMouseOut={() =>
                  !mobileActive &&
                  chosenMember === null &&
                  (() => {
                    hoverTimeout = (setTimeout(() => {
                      setCurrentHoverMember(null);
                    }, 60) as unknown) as number;
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
                    scrollToTop();
                  }

                  setChosenMember(id as IsedolMemberID);
                }}
              >
                <div className={styles.background}>
                  <Centerize>
                    <div className={styles.member_image_wrapper}>
                      <Image
                        className={styles.member_image}
                        src={member.image}
                        layout='fill'
                        priority
                        placeholder='blur'
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
                          ? '/images/icons/ico_card_arrow_tail.svg'
                          : '/images/icons/ico_card_arrow.svg'
                      }
                      layout='fill'
                      alt='사인 arrow'
                      priority
                    ></Image>
                  </div>
                  <p className={styles.sign_name}>
                    <Image
                      className={styles.member_sign_name}
                      src={member.signNameImage}
                      layout='fill'
                      alt={`${member.name.ko}`}
                      priority
                    ></Image>
                  </p>
                  <div className={styles.sign_wrapper}>
                    <Image
                      className={styles.member_sign}
                      src={member.signImage}
                      layout='fill'
                      alt={`${member.name.ko} 싸인`}
                    ></Image>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {previousMember && (
          <div
            className={concatClass(
              styles.member_detail,
              chosenMember !== null && styles.active
            )}
            style={
              {
                '--left': parentRect && `${parentRect.left + 32}px`,
                '--top': cardRect && `${cardRect.top}px`,
                '--width': cardRect && `${cardRect.width}px`,
                '--height': cardRect && `${cardRect.height}px`,
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
                </div>
                <div className={styles.social_links}>
                  {Members[previousMember].links.map(link =>
                    <SocialLink key={`social-link-${link.name}-${link.link}`} {...link} white></SocialLink>
                  )}
                </div>
              </div>
              <div className={styles.profile_sign_wrapper}>
                <Image
                  className={styles.member_sign}
                  src={Members[previousMember].signImage}
                  layout='fill'
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
      <WakEnterLogoLink className={styles.logo} white></WakEnterLogoLink>
    </div>
  );
};

export default IsedolMembers;
