import HeaderBase, { HeaderBaseProps } from "../common/Header";

import styles from '../../styles/components/isedol/IsedolHeader.module.scss';

export const IsedolLogo = () => {
  return <div className={styles.logo}>
    <div className={styles.logoText}>
      <span>ISEGYE IDOL</span>
    </div>
  </div>;
};

export const IsedolHeader = (props: HeaderBaseProps) => {
  const Left = <IsedolLogo></IsedolLogo>;
  const Right = <></>; // TODO : 오른쪽 부분 추가하기

  return (
    <HeaderBase
      {...props}
      left={Left}
      right={Right}
    ></HeaderBase>
  );
};

export default IsedolHeader;