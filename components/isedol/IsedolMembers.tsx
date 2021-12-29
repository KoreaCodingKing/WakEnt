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
  signImage: string
  color: string
}

type MemberID = 'ine' | 'jingburger' | 'lilpa' | 'jururu' | 'gosegu' | 'viichan'

const Members: Record<MemberID, Member> = {
  ine: {
    name: {
      en: 'INE',
      ko: '아이네',
    },
    image: '/images/member/ine.jpg',
    signImage: '/images/sign/ine.png',
    color: '#210C28',
  },
  jingburger: {
    name: {
      en: 'Jingburger',
      ko: '징버거',
    },
    image: '/images/member/jingburger.jpg',
    signImage: '/images/sign/jingburger.png',
    color: '#1A1506',
  },
  lilpa: {
    name: {
      en: 'LILPA',
      ko: '릴파',
    },
    image: '/images/member/lilpa.jpg',
    signImage: '/images/sign/lilpa.png',
    color: '#0E0A24',
  },
  jururu: {
    name: {
      en: 'Jururu',
      ko: '주르르',
    },
    image: '/images/member/jururu.jpg',
    signImage: '/images/sign/jururu.png',
    color: '#1B0A1C',
  },
  gosegu: {
    name: {
      en: 'GOSEGU',
      ko: '고세구',
    },
    image: '/images/member/gosegu.jpg',
    signImage: '/images/sign/gosegu.png',
    color: '#05171D',
  },
  viichan: {
    name: {
      en: 'Viichan',
      ko: '비챤',
    },
    image: '/images/member/viichan.jpg',
    signImage: '/images/sign/viichan.png',
    color: '#081607',
  },
};

const isNotNull = <T extends unknown>(elem: T | null): elem is T => {
  return typeof elem !== null;
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

export const IsedolMembers: NextPage = () => {
  const [chosenMember, setChosenMember] = useHashState<MemberID | null>(null);
  const [currentHoverMember, setCurrentHoverMember] = useState<MemberID | null>(
    null
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const membersCardCache: HTMLElement[] = [];
  const router = useRouter();

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
        className={styles.inner_container}
        data-member={currentHoverMember || chosenMember}
        ref={containerRef}
      >
        <div
          className={concatClass(
            styles.members_list,
            isNotNull(chosenMember) && styles.chosen,
            mobileActive && styles.mobile
          )}
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
                  !mobileActive &&
                  chosenMember === null &&
                  clearTimeout(hoverTimeout) ||
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

                  if (mobileActive && containerRef.current) {
                    containerRef.current.scrollTo({
                      left: 0,
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
                  <p className={styles.sign_name}>{member.name.ko}</p>
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
        {chosenMember && (
          <div className={concatClass(styles.member_detail)}>
            <div className={styles.profile}>
              <div className={styles.profile_name}>
                <p></p>
                <p></p>
              </div>
              <div className={styles.profile_detail}>
                <dl>
                  <dt>Color</dt>
                  <dd></dd>
                  <dt>Birth</dt>
                  <dd></dd>
                  <dt>Height</dt>
                  <dd></dd>
                  <dt>Blood</dt>
                  <dd></dd>
                  <dt>MBTI</dt>
                  <dd></dd>
                  <dt>Fandom</dt>
                  <dd></dd>
                </dl>
                <div className={styles.social_box}></div>
                <div className={styles.sign_wrapper}></div>
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
