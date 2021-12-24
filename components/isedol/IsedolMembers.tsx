import { NextPage } from 'next';
import { useState } from 'react';
import styles from '../../styles/components/isedol/IsedolMembers.module.scss';

export const IsedolMembers: NextPage = () => {
  const [selectMember, setSelectMember] = useState(0);
  const members = [
    {name: 'ine', image: '/images/bg_ine.png'},
    {name: 'jingburger', image: '/images/bg_jingburger.png'},
    {name: 'lilpa', image: '/images/bg_lilpa.png'},
    {name: 'jururu', image: '/images/bg_jururu.png'},
    {name: 'gosegu', image: '/images/bg_gosegu.png'},
    {name: 'vichan', image: '/images/bg_vichan.png'},
  ]
  return (
    <div className={styles.isedol_member__container}>
      <div className={styles.background}></div>
    </div>
  );
};

export default IsedolMembers;
