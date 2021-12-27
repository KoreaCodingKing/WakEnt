import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/components/isedol/IsedolMembers.module.scss';
import Head from 'next/head';
import Centerize from '../common/Centerize';
import { WakEnterLogo } from '../wakenter/WakEnterHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { concatClass } from '../../utils/class';

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

export const IsedolMembers: NextPage = () => {
  const [chosenMember, setChosenMember] = useState<MemberID | null>(null);
  const [currentHoverMember, setCurrentHoverMember] = useState<MemberID | null>(
    null
  );
  const [showMemberDetail, setShowMemberDetail] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const membersCardCache: HTMLElement[]= [];
  const router = useRouter();

  useEffect(() => {
    const wheelEventHandler = (event: WheelEvent) => {
      event.preventDefault();

      containerRef.current!.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    };

    const containerCurrentRef = containerRef.current;
    containerCurrentRef!.addEventListener('wheel', wheelEventHandler);
    return () => {
      containerCurrentRef!.removeEventListener('wheel', () => wheelEventHandler);
    };
  }, []);

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
        {/* ToDo: styles.members_contents대신 member_detail을 넣어 화면 전환시 width: fit-content; 대신 min, max-width값을 지정한다.(overflow 방지) */}
        <div className={(showMemberDetail) ? styles.member_detail : styles.members_contents}>
          {true &&
            Object.keys(Members).map((id, i) => {
              const member = Members[id as MemberID];

              return (
                <>
                  <div
                    key={`member-card-${id}`}
                    className={concatClass(styles.member, (!!chosenMember && chosenMember !== id) && styles.disapear)}
                    data-member={chosenMember}
                    ref={(element: HTMLDivElement) => element && membersCardCache.push(element)}
                    data-active={
                      currentHoverMember === null || id === currentHoverMember
                    }
                    onMouseEnter={() => setCurrentHoverMember(id as MemberID)}
                    onMouseOut={() => setCurrentHoverMember(null)}
                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                      event.preventDefault();
                      if (chosenMember) {
                        return;
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
                            alt={member.name.ko}
                          ></Image>
                        </div>
                      </Centerize>
                    </div>
                    <div
                      className={styles.sign_box}
                      data-member={id}
                    >
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
                  {/* ToDo: animation 마친 후 이 화면을 보여주도록 한다. 이때 sign box는 display: none으로 처리되어 컷함. */}
                  {false &&
                    <div className={styles.chosen_member}>
                      <div className={styles.chosen_member__image_wrapper}>
                        <Image className={styles.chosen_member__image}
                          src={Members[chosenMember!].image}
                          layout='fill'
                          alt={`${Members[chosenMember!].name.ko} 이미지`}></Image>
                      </div>
                      <div className={styles.chosen_member__profile}>
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
                          <div className={styles.social_box}>
                          </div>
                          <div className={styles.sign_wrapper}>
                          </div>
                        </div>
                      </div>
                      <div className={styles.chosen_member__charator}>
                      </div>
                    </div>
                  }
                </>
              );
            })}
        </div>
      </div>
      <Link key={'link-wak-enter'} href={'/'} passHref>
        <div className={styles.logo}
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
