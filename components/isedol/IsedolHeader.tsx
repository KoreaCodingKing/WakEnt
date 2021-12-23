import HeaderBase, { HeaderBaseProps } from '../common/Header';

import styles from '../../styles/components/isedol/IsedolHeader.module.scss';
import { concatClass } from '../../utils/class';

interface IsedolHeaderProps {
  isOpenMenu: boolean;
  onMenuClick?: () => void
}

interface IsedolLogoProps {
  big?: boolean
}

export const IsedolLogo = ({ big }: IsedolLogoProps) => {
  return (
    <div className={concatClass(styles.logo, big && styles.big)}>
      <div className={styles.logoText}>
        <span>ISEGYE IDOL</span>
      </div>
    </div>
  );
};

interface MenuButtonProps {
  onClick?: () => void
}

export const MenuButton = ({ onClick } : MenuButtonProps) : JSX.Element => {
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
