import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/components/isedol/IsedolMembers.module.scss';

interface Member {
  id: string
  name: string
  image: string
  signImage: string
  color: string
}

const Members: Member[] = [
  {
    id: 'INE',
    name: '아이네',
    image: '/images/member/ine.png',
    signImage: '/images/sign/ine.png',
    color: '#210C28',
  },
  {
    id: 'Jingburger',
    name: '징버거',
    image: '/images/member/jingburger.png',
    signImage: '/images/sign/jingburger.png',
    color: '#1A1506',
  },
  {
    id: 'LILPA',
    name: '릴파',
    image: '/images/member/lilpa.png',
    signImage: '/images/sign/lilpa.png',
    color: '#0E0A24',
  },
  {
    id: 'Jururu',
    name: '주르르',
    image: '/images/member/jururu.png',
    signImage: '/images/sign/jururu.png',
    color: '#1B0A1C',
  },
  {
    id: 'GOSEGU',
    name: '고세구',
    image: '/images/member/gosegu.png',
    signImage: '/images/sign/gosegu.png',
    color: '#05171D',
  },
  {
    id: 'Viichan',
    name: '비챤',
    image: '/images/member/viichan.png',
    signImage: '/images/sign/viichan.png',
    color: '#081607',
  },
];

export const IsedolMembers: NextPage = () => {
  const [chosenMember, setChosenMember] = useState<Member | null>(null);
  const [currentHoverMember, setCurrentHoverMember] = useState<string | null>(null);

  return (
    <div className={styles.isedol_members__container}>
      <div
        className={styles.inner_container}
        data-member={currentHoverMember?.toLowerCase()}
      ></div>
      <div className={styles.members_contents}>
        {!chosenMember &&
          Members.map(member => {
            return (
              <div
                key={`member-card-${member.id}`}
                className={styles.member_card_box}
                data-active={member.id === currentHoverMember}
                onMouseEnter={() => setCurrentHoverMember(member.id)}
                onMouseOut={() => setCurrentHoverMember(null)}
              >
                <Image
                  className={styles.member_card}
                  src={member.image}
                  layout='fill'
                  alt={member.name}
                ></Image>
              </div>
            );
          })}
      </div>
      {/* ToDo: 멤버별 소개 화면 */}
    </div>
  );
};

export default IsedolMembers;
