import { NextPage } from 'next';
import { useState } from 'react';
import styles from '../../styles/components/isedol/IsedolMembers.module.scss';

export const IsedolMembers: NextPage = () => {
  const [selectMember, setSelectMember] = useState(0);
  const members = [
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

  return (
    <div className={styles.isedol_member__container}>
      <div className={styles.background}></div>
    </div>
  );
};

export default IsedolMembers;
