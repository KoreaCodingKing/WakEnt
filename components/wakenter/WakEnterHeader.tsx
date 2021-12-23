import HeaderBase, { HeaderBaseProps } from '../common/Header';

import Image from 'next/image';

import styles from '../../styles/components/wakenter/WakEnterHeader.module.scss';
import { concatClass } from '../../utils/class';

interface WakEnterLogoProps {
  white?: boolean
}

export const WakEnterLogo = ({ white }: WakEnterLogoProps) => {
  return (
    <div className={concatClass(styles.logo, white && styles.white)}>
      <div className={styles.logoImage}>
        <Image src='/images/wak-enter-centered.png' layout='fill' alt='WAK'></Image>
      </div>
      <div className={styles.logoText}>
        <span>ENTERTAINMENT</span>
      </div>
    </div>
  );
};

export const WakEnterHeader = (props: HeaderBaseProps) => {
  const Left = <WakEnterLogo white={props.white}></WakEnterLogo>;
  const Right = <></>; // TODO : 오른쪽 부분 추가하기

  return (
    <HeaderBase
      {...props}
      left={Left}
      right={Right}
    ></HeaderBase>
  );
};

export default WakEnterHeader;
