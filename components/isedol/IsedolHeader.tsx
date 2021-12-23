import HeaderBase, { HeaderBaseProps } from "../common/Header";

import styles from '../../styles/components/isedol/IsedolHeader.module.scss';

interface IsedolHeaderProps {
  isOpenMenu: boolean;
}

export const IsedolLogo = () => {
  return <div className={styles.logo}>
    <div className={styles.logoText}>
      <span>ISEGYE IDOL</span>
    </div>
  </div>;
};

export const MenuBtn = ():JSX.Element => {
  
  
  return (
    <div className={styles.menu_wrapper}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  );
};

export const IsedolHeader = (props: IsedolHeaderProps) => {
  const Left = <IsedolLogo></IsedolLogo>;
  const Right = <MenuBtn ></MenuBtn>; // TODO : 오른쪽 부분 추가하기

  return (
    <HeaderBase
      {...props}
      left={Left}
      right={Right}
    ></HeaderBase>
  );
};

export default IsedolHeader;