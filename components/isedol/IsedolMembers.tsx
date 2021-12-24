import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/components/isedol/isedolMembers.module.scss';

interface Member {
  name: string;
  image: string;
  signImage: string;
  color: string;
}

const members = [
  {
    name: 'empty',
    image: '',
    signImage: '',
    color: '0A0A0B'
  },
  {
    name: 'ine',
    image: '/images/bg_ine.png',
    signImage: '/images/sign_ine.png',
    color: '#210C28'
  },
  {
    name: 'jingburger',
    image: '/images/bg_jingburger.png',
    signImage: '/images/sign_jingburger.png',
    color: '#1A1506'
  },
  {
    name: 'lilpa',
    image: '/images/bg_lilpa.png',
    signImage: '/images/sign_lilpa.png',
    color: '#0E0A24'
  },
  {
    name: 'jururu',
    image: '/images/bg_jururu.png',
    signImage: '/images/sign_jururu.png',
    color: '#1B0A1C'
  },
  {
    name: 'gosegu',
    image: '/images/bg_gosegu.png',
    signImage: '/images/sign_gosegu.png',
    color: '#05171D'
  },
  {
    name: 'vichan',
    image: '/images/bg_vichan.png',
    signImage: '/images/sign_vichan.png',
    color: '#081607'
  },
];

export const IsedolMembers: NextPage = () => {
  const [selectMember, setSelectMember] = useState<Member>(members[0]);
  const [memberColor, setMemberColor] = useState(members[0].color);

  return (
    <div className={styles.isedol_members__container}>
      <div className={styles.inner_container}>
        {selectMember.name === members[0].name && members.map((member, i) => {
          if (i === 0) {return;}
          <div className={styles.member}
            style={{backgroundColor: `${memberColor}`}}
            onMouseEnter={() => setMemberColor(member.color)}
            onMouseOut={() => setMemberColor(members[0].color)}>
            <div className={styles.member_card_box}>
              <Image className={styles.member_card}
                src={member.image}
                alt={member.name}></Image>
            </div>
          </div>;
        })}
        {/* ToDo: 멤버별 소개 화면 */}
      </div>
    </div>
  );
};

export default IsedolMembers;
