import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
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

interface Member {
  name: {
    en: string
    ko: string
  }
  image: string
  signNameImage: string
  signImage: string
  color: string
  metadata?: {
    color: string
    birth: string
    height: number
    blood: string
    mbti: string
    fandom: string
  }
}

type MemberID = 'ine' | 'jingburger' | 'lilpa' | 'jururu' | 'gosegu' | 'viichan'

const Members: Record<MemberID, Member> = {
  ine: {
    name: {
      en: 'INE',
      ko: '아이네',
    },
    image: '/images/member/ine.jpg',
    signNameImage: '/images/member/text/ine.svg',
    signImage: '/images/sign/ine.png',
    color: '#210C28',
    metadata: {
      color: 'Purple',
      birth: '1994',
      height: 158,
      blood: 'B',
      mbti: 'INFP',
      fandom: '둘기',
    },
  },
  jingburger: {
    name: {
      en: 'Jingburger',
      ko: '징버거',
    },
    image: '/images/member/jingburger.jpg',
    signNameImage: '/images/member/text/jingburger.svg',
    signImage: '/images/sign/jingburger.png',
    color: '#1A1506',
    metadata: {
      color: 'Yellow',
      birth: '1995.10.08',
      height: 161.9,
      blood: 'B',
      mbti: 'INFJ',
      fandom: '똥강아지',
    },
  },
  lilpa: {
    name: {
      en: 'LILPA',
      ko: '릴파',
    },
    image: '/images/member/lilpa.jpg',
    signNameImage: '/images/member/text/lilpa.svg',
    signImage: '/images/sign/lilpa.png',
    color: '#0E0A24',
    metadata: {
      color: 'Indigo',
      birth: '1996.03.09',
      height: 164,
      blood: 'O',
      mbti: 'ENFP',
      fandom: '박쥐단',
    },
  },
  jururu: {
    name: {
      en: 'Jururu',
      ko: '주르르',
    },
    image: '/images/member/jururu.jpg',
    signNameImage: '/images/member/text/jururu.svg',
    signImage: '/images/sign/jururu.png',
    color: '#1B0A1C',
    metadata: {
      color: 'Violet',
      birth: '1997.06.10',
      height: 162,
      blood: 'O',
      mbti: 'ENFP, INTP',
      fandom: '주폭도',
    },
  },
  gosegu: {
    name: {
      en: 'GOSEGU',
      ko: '고세구',
    },
    image: '/images/member/gosegu.jpg',
    signNameImage: '/images/member/text/gosegu.svg',
    signImage: '/images/sign/gosegu.png',
    color: '#05171D',
    metadata: {
      color: 'Blue',
      birth: '1998',
      height: 30000,
      blood: 'B',
      mbti: 'ENTJ',
      fandom: '세균단',
    },
  },
  viichan: {
    name: {
      en: 'Viichan',
      ko: '비챤',
    },
    image: '/images/member/viichan.jpg',
    signNameImage: '/images/member/text/viichan.svg',
    signImage: '/images/sign/viichan.png',
    color: '#081607',
    metadata: {
      color: 'Green',
      birth: '2000.01.16',
      height: 160,
      blood: 'B',
      mbti: 'INFJ',
      fandom: '고라니단',
    },
  },
};

const isNotNull = <T extends unknown>(elem: T | null): elem is T => {
  return elem !== null;
};

const useHashState = <S extends string | null>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initialState);

  useEffect(() => {
    if (location.hash) {
      setState(location.hash.replace(/\#/, '') as S);
    }

    const hashChangeHandler = () =>
      setState(
        (location.hash === '' ? null : location.hash.replace(/\#/, '')) as S
      );

    window.addEventListener('hashchange', hashChangeHandler);

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  useEffect(() => {
    if (location.hash === state || (state === null && location.hash === '')) {
      return;
    }

    location.hash = state === null ? '' : `${state}`;
  }, [state]);

  return [state, setState];
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
  const [rect, setRect] = useState<
    [DOMRect | undefined, DOMRect | undefined]
  >([undefined, undefined]);

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
                      behavior: 'smooth'
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
              <div className={styles.profile_name}>
                <h1>{Members[previousMember].name.ko}</h1>
                <p className={styles.sub}>{Members[previousMember].name.en}</p>
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
              <div className={styles.profile_sign_wrapper}>
                <Image
                  className={styles.member_sign}
                  src={Members[previousMember].signImage}
                  layout='fill'
                  alt={`${Members[previousMember].name.ko} 싸인`}
                ></Image>
              </div>
            </div>
            <div className={styles.member_detail__charator}></div>
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
