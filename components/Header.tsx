import { ReactNode } from 'react';
import Image from 'next/image';
import styles from '../styles/components/Header.module.scss';

interface HeaderProps {
  imgPath?: string,
  children: ReactNode
}

export const Header = (props: HeaderProps) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_left}>
        <h1 className={styles.logo_wrapper}>
          {props.imgPath && <Image src={props.imgPath} alt='왁엔터테인먼트' />}
        </h1>
      </div>
      <div className={styles.header_right}>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
