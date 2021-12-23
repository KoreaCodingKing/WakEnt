import HeaderBase, { HeaderBaseProps } from '../common/Header';

import styles from '../../styles/components/isedol/IsedolHeader.module.scss';
import { concatClass } from '../../utils/class';
import Link from 'next/link';

interface IsedolHeaderProps {
  isOpenMenu: boolean
  onMenuClick?: () => void
}

interface IsedolLogoProps {
  big?: boolean
}

import { useRouter } from 'next/router';

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

interface MenuButtonProps {
  onClick?: () => void
}

export const MenuButton = ({ onClick }: MenuButtonProps): JSX.Element => {
  return (
    <div className={styles.menu_wrapper} onClick={() => onClick && onClick()}>
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
