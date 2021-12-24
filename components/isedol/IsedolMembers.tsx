import { NextPage } from 'next';
import { useState } from 'react';
import styles from '../../styles/components/isedol/IsedolMembers.module.scss';

export const IsedolMembers: NextPage = () => {
  const [selectMember, setSelectMember] = useState(0);
  const members = [
    {name: 'ine'},
    {name: 'jingburger'},
    {name: 'lilpa'},
    {name: 'jururu'},
    {name: 'gosegu'},
    {name: 'vichan'},
  ]
  return (
    <div className={styles.isedol_member__container}>
      <div className={styles.background}></div>
    </div>
  );
};

export default IsedolMembers;
