import { NextPage } from 'next';
import styles from '../../styles/components/isedol/IsedolMembers.module.scss';

export const IsedolMembers: NextPage = () => {
  return (
    <div className={styles.isedol_main__container}>
      <div className={styles.background}></div>
    </div>
  );
};

export default IsedolMembers;
