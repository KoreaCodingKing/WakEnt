import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/components/isedol/IsedolMembers.module.scss';
import Head from 'next/head';
import Centerize from '../common/Centerize';
import { WakEnterLogo } from '../wakenter/WakEnterHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { concatClass } from '../../utils/class';
import { useHorizonalPageScroller } from '../common/Scroll';

import { useHashState } from '../../utils/hashState';
import { CharacterModel, MemberID, Members } from '../../structs/member';

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
      setRect([
        elem.getBoundingClientRect(),
        elem.querySelector(`.${styles.member}`)?.getBoundingClientRect(),
      ]);
    };

    handler();

    requestAnimationFrame(() => {
      handler();
    });

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [elem]);

  return rect;
};

interface DetailMemberCSS extends React.CSSProperties {
  '--left': string
  '--top': string
  '--width': string
}

export const IsedolMembers: NextPage = () => {
  const [chosenMember, setChosenMember] = useHashState<MemberID | null>(null);
  const previousMember = useNonNullState(chosenMember);

  const [currentHoverMember, setCurrentHoverMember] = useState<MemberID | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const memberRef = useRef<HTMLDivElement>(null);

  const membersCardCache: HTMLElement[] = [];
  const router = useRouter();

  const [parentRect, cardRect] = useRect(memberRef);

  const [mobileActive, mobilePage] = useHorizonalPageScroller(
    containerRef,
    1124,
    membersCardCache,
    () => {
      return chosenMember === null;
    }
  );

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [chosenMember]);

  useEffect(() => {
    if (!mobileActive) {
      if (currentHoverMember) {
        setCurrentHoverMember(null);
      }

      return;
    }

    setCurrentHoverMember(Object.keys(Members)[mobilePage] as MemberID);
  }, [mobileActive, mobilePage]);

  let hoverTimeout = 0;

  return (
    <div className={styles.isedol_members__container}>
      <Head>
        <meta
          name='theme-color'
          content={
            currentHoverMember ? Members[currentHoverMember].color : '#0A0A0B'
          }
        ></meta>
      </Head>
      <div
        className={concatClass(
          styles.inner_container,
          chosenMember !== null && styles.active
        )}
        data-member={currentHoverMember || chosenMember}
        ref={containerRef}
      >
        <div
          className={concatClass(
            styles.members_list,
            chosenMember !== null && styles.chosen,
            mobileActive && styles.mobile
          )}
          ref={memberRef}
          data-member={chosenMember}
        >
          {Object.keys(Members).map((id, i) => {
            const member = Members[id as MemberID];

            return (
              <div
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
                  (!mobileActive && currentHoverMember === null) ||
                  (mobileActive && mobilePage === i) ||
                  id === currentHoverMember
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

                  if (mobileActive && containerRef.current) {
                    containerRef.current.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: 'smooth',
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
                    ></Image>
                  </div>
                  <p className={styles.sign_name}>
                    <Image
                      className={styles.member_sign_name}
                      src={member.signNameImage}
                      layout='fill'
                      alt={`${member.name.ko}`}
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
              </div>
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
                '--left': parentRect && `${parentRect.left + 16}px`,
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
                    <tr>
                      <td>Color</td>
                      <td>{Members[previousMember].metadata?.color}</td>
                    </tr>
                    <tr>
                      <td>Birth</td>
                      <td>{Members[previousMember].metadata?.birth}</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>{Members[previousMember].metadata?.height}cm</td>
                    </tr>
                    <tr>
                      <td>Blood</td>
                      <td>{Members[previousMember].metadata?.blood}</td>
                    </tr>
                    <tr>
                      <td>MBTI</td>
                      <td>{Members[previousMember].metadata?.mbti}</td>
                    </tr>
                    <tr>
                      <td>Fandom</td>
                      <td>{Members[previousMember].metadata?.fandom}</td>
                    </tr>
                  </table>
                  <div className={styles.social_box}></div>
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
              <div className={styles.member_detail__character}>
                <div className={styles.character_slide_box}>
                  <button
                    className={styles.prev_button}
                    onClick={() => {
                      if (currentIndex === 0) {
                        setCurrentIndex(
                          Members[previousMember].modelImages.length - 1
                        );
                        return;
                      }

                      setCurrentIndex(currentIndex - 1);
                    }}
                  >
                    <svg
                      width='22'
                      height='39'
                      viewBox='0 0 22 39'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.20525 4.74036C0.244072 3.74915 0.268421 2.16643 1.25963 1.20525C2.25085 0.244072 3.83357 0.268422 4.79475 1.25964L1.20525 4.74036ZM19 19.5L20.7948 17.7596C21.7351 18.7294 21.7351 20.2706 20.7948 21.2404L19 19.5ZM4.79475 37.7404C3.83357 38.7316 2.25085 38.7559 1.25963 37.7948C0.268421 36.8336 0.244072 35.2509 1.20525 34.2596L4.79475 37.7404ZM4.79475 1.25964L20.7948 17.7596L17.2052 21.2404L1.20525 4.74036L4.79475 1.25964ZM20.7948 21.2404L4.79475 37.7404L1.20525 34.2596L17.2052 17.7596L20.7948 21.2404Z'
                        transform='translateY(-180deg)'
                        className={styles.prev_icon}
                        fill='rgba(126, 125, 125, 0.452)'
                      />
                    </svg>
                  </button>
                  <div className={styles.character_wrapper_box}>
                    <div
                      className={styles.character_wrapper}
                      style={{ transform: `transitionX(${currentIndex}00%)` }}
                    >
                      {Members[previousMember].modelImages.map(
                        (model: CharacterModel, index: number) => {
                          return (
                            <div
                              key={`model-image-${index}`}
                              className={styles.image_wrapper}
                            >
                              <Image
                                src={model.image}
                                layout='fill'
                                priority
                                placeholder='blur'
                                blurDataURL={model.image}
                                alt={`${Members[previousMember].name.ko} 이미지`}
                              ></Image>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <button
                    className={styles.next_button}
                    onClick={() => {
                      if (
                        currentIndex ===
                        Members[previousMember].modelImages.length - 1
                      ) {
                        setCurrentIndex(0);
                        return;
                      }

                      setCurrentIndex(currentIndex + 1);
                    }}
                  >
                    <svg
                      width='22'
                      height='39'
                      viewBox='0 0 22 39'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.20525 4.74036C0.244072 3.74915 0.268421 2.16643 1.25963 1.20525C2.25085 0.244072 3.83357 0.268422 4.79475 1.25964L1.20525 4.74036ZM19 19.5L20.7948 17.7596C21.7351 18.7294 21.7351 20.2706 20.7948 21.2404L19 19.5ZM4.79475 37.7404C3.83357 38.7316 2.25085 38.7559 1.25963 37.7948C0.268421 36.8336 0.244072 35.2509 1.20525 34.2596L4.79475 37.7404ZM4.79475 1.25964L20.7948 17.7596L17.2052 21.2404L1.20525 4.74036L4.79475 1.25964ZM20.7948 21.2404L4.79475 37.7404L1.20525 34.2596L17.2052 17.7596L20.7948 21.2404Z'
                        className={styles.next_icon}
                        fill='rgba(126, 125, 125, 0.452)'
                      />
                    </svg>
                  </button>
                </div>
                <div className={styles.page_indicator}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link key={'link-wak-enter'} href={'/'} passHref>
        <div
          className={styles.logo}
          tabIndex={100}
          onKeyDown={ev => ev.key === 'Enter' && router.push('/')}
        >
          <WakEnterLogo white></WakEnterLogo>
        </div>
      </Link>
    </div>
  );
};

export default IsedolMembers;
