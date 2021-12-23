import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import HeaderBase from '../common/Header';
import styles from '../../styles/components/isedol/IsedolHeader.module.scss';
import { concatClass } from '../../utils/class';

interface IsedolHeaderProps {
  isOpenMenu: boolean
  onMenuClick?: () => void
}

interface IsedolLogoProps {
  big?: boolean
}

interface MenuButtonProps {
  onClick?: () => void
}

export const IsedolLogo = ({ big }: IsedolLogoProps) => {
  const router = useRouter();

  return (
    <div className={concatClass(styles.logo, big && styles.big)}>
      <Link href='/isedol' passHref>
        <div
          className={styles.logoText}
          tabIndex={90}
          onKeyDown={ev =>
            ev.key === 'Enter' && router.push('/isedol')
          }
        >
          <span>ISEGYE IDOL</span>
        </div>
      </Link>
    </div>
  );
};

export const MenuButton = ({ onClick }: MenuButtonProps): JSX.Element => {
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.menu_wrapper}
      ref={menuWrapperRef}
      onClick={() => {
        onClick && onClick();
        menuWrapperRef.current!.classList.toggle(`${styles.open}`);
      }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export const IsedolHeader = (props: IsedolHeaderProps) => {
  const Left = <IsedolLogo></IsedolLogo>;
  const Right = <MenuButton onClick={props.onMenuClick}></MenuButton>;

  return <HeaderBase {...props} left={Left} right={Right}></HeaderBase>;
};

export default IsedolHeader;
