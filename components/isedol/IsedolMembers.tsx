import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/components/isedol/IsedolMembers.module.scss';
import Head from 'next/head';
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
    image: '/images/member/ine.png',
    signImage: '/images/sign/ine.png',
    color: '#210C28',
  },
  jingburger: {
    name: {
      en: 'Jingburger',
      ko: '징버거',
    },
    image: '/images/member/jingburger.png',
    signImage: '/images/sign/jingburger.png',
    color: '#1A1506',
  },
  lilpa: {
    name: {
      en: 'LILPA',
      ko: '릴파',
    },
    image: '/images/member/lilpa.png',
    signImage: '/images/sign/lilpa.png',
    color: '#0E0A24',
  },
  jururu: {
    name: {
      en: 'Jururu',
      ko: '주르르',
    },
    image: '/images/member/jururu.png',
    signImage: '/images/sign/jururu.png',
    color: '#1B0A1C',
  },
  gosegu: {
    name: {
      en: 'GOSEGU',
      ko: '고세구',
    },
    image: '/images/member/gosegu.png',
    signImage: '/images/sign/gosegu.png',
    color: '#05171D',
  },
  viichan: {
    name: {
      en: 'Viichan',
      ko: '비챤',
    },
    image: '/images/member/viichan.png',
    signImage: '/images/sign/viichan.png',
    color: '#081607',
  },
};

export const IsedolMembers: NextPage = () => {
  const [chosenMember, setChosenMember] = useState<MemberID | null>(null);
  const [currentHoverMember, setCurrentHoverMember] = useState<MemberID | null>(
    null
  );

  return (
    <div className={styles.isedol_members__container}>
      <Head>
        <meta
          name='theme-color'
          content={currentHoverMember ? Members[currentHoverMember].color : '#0A0A0B'}
        ></meta>
      </Head>
      <div
        className={styles.inner_container}
        data-member={currentHoverMember || chosenMember}
      ></div>
      <div className={styles.members_contents}>
        {!chosenMember &&
          Object.keys(Members).map((id, i) => {
            const member = Members[id as MemberID];

            return (
              <div
                key={`member-card-${id}`}
                className={styles.member_card_box}
                data-active={
                  currentHoverMember === null || id === currentHoverMember
                }
                onMouseEnter={() => setCurrentHoverMember(id as MemberID)}
                onMouseOut={() => setCurrentHoverMember(null)}
              >
                <Image
                  className={styles.member_card}
                  src={member.image}
                  layout='fill'
                  alt={member.name.ko}
                ></Image>
                {/* ToDo: 조건식 변경 및 data-member 값 변경(현재 테스트로 열어 놓고 커밋함) */}
                {true &&
                  <div
                    className={styles.sign_box}
                    data-member={'44'}>
                    <div className={styles.arrow_wrapper}>
                      <Image
                        className={styles.sign_arrow}
                        src={(i%2 === 0) ? '/images/icons/ico_card_arrow_tail.png' : '/images/icons/ico_card_arrow.png' }
                        layout='fill'
                        alt='사인 arrow'></Image>
                    </div>
                    <p className={styles.sign_name}>{member.name.ko}</p>
                    <div className={styles.sign_wrapper}>
                      <Image
                        className={styles.member_sign}
                        src={member.signImage}
                        layout='fill'
                        alt={`${member.name.ko} 싸인`}></Image>
                    </div>
                  </div>
                }
              </div>
            );
          })}
      </div>
      {/* ToDo: 멤버별 소개 화면 */}
    </div>
  );
};

export default IsedolMembers;
