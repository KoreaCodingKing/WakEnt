import { useRouter } from 'next/router';
import Link from 'next/link';

import HeaderBase from '../common/Header';
import styles from '../../styles/components/isedol/IsedolHeader.module.scss';
import { concatClass } from '../../utils/class';

interface IsedolHeaderProps {
  white?: boolean
  fixed?: boolean
  isOpenMenu: boolean
  onMenuClick?: () => void
}

interface IsedolLogoProps {
  white?: boolean
  big?: boolean
}

interface MenuButtonProps {
  white?: boolean
  open?: boolean
  onClick?: () => void
}

export const IsedolLogo = ({ big, white }: IsedolLogoProps) => {
  const router = useRouter();

  return (
    <div
      className={concatClass(
        styles.logo,
        big && styles.big,
        white && styles.white
      )}
    >
      <Link href='/isedol' passHref>
        <a
          className={styles.logoText}
          tabIndex={90}
          onKeyDown={ev => ev.key === 'Enter' && router.push('/isedol')}
        >
          <span>ISEGYE IDOL</span>
        </a>
      </Link>
    </div>
  );
};

export const MenuButton = ({
  onClick,
  open,
  white,
}: MenuButtonProps): JSX.Element => {
  return (
    <div
      tabIndex={100}
      className={concatClass(
        styles.menu_wrapper,
        open && styles.open,
        white && styles.white
      )}
      onKeyDown={(ev) => ev.key === 'Enter' && onClick && onClick()}
      onClick={() => onClick && onClick()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export const IsedolHeader = (props: IsedolHeaderProps) => {
  const Left = <IsedolLogo white={props.white}></IsedolLogo>;
  const Right = (
    <MenuButton
      white={props.white}
      open={props.isOpenMenu}
      onClick={props.onMenuClick}
    ></MenuButton>
  );

  return <HeaderBase {...props} left={Left} right={Right}></HeaderBase>;
};

export default IsedolHeader;
