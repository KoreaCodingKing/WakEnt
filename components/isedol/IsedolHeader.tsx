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
  open?: boolean
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
          onKeyDown={ev => ev.key === 'Enter' && router.push('/isedol')}
        >
          <span>ISEGYE IDOL</span>
        </div>
      </Link>
    </div>
  );
};

export const MenuButton = ({ onClick, open }: MenuButtonProps): JSX.Element => {
  return (
    <div
      className={concatClass(styles.menu_wrapper, open && styles.open)}
      onClick={() => onClick && onClick()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export const IsedolHeader = (props: IsedolHeaderProps) => {
  const Left = <IsedolLogo></IsedolLogo>;
  const Right = (
    <MenuButton
      open={props.isOpenMenu}
      onClick={props.onMenuClick}
    ></MenuButton>
  );

  return <HeaderBase {...props} left={Left} right={Right}></HeaderBase>;
};

export default IsedolHeader;
