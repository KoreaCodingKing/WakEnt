import HeaderBase, { HeaderBaseProps } from '../common/Header';

import styles from '../../styles/components/isedol/IsedolHeader.module.scss';
import { concatClass } from '../../utils/class';
import { useRef } from 'react';

interface IsedolHeaderProps {
  isOpenMenu: boolean;
  onMenuClick?: () => void
}

interface IsedolLogoProps {
  big?: boolean
}

interface MenuButtonProps {
  onClick?: () => void
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


export const MenuButton = ({ onMenuClick, isOpenMenu } : IsedolHeaderProps) : JSX.Element => {
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.menu_wrapper}
      ref={menuWrapperRef}
      onClick={() => {
        onMenuClick && onMenuClick();
        menuWrapperRef.current!.classList.toggle('open');
      }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export const IsedolHeader = (props: IsedolHeaderProps) => {
  const Left = <IsedolLogo></IsedolLogo>;
  const Right = <MenuButton onMenuClick={props.onMenuClick} isOpenMenu={props.isOpenMenu}></MenuButton>;

  return <HeaderBase {...props} left={Left} right={Right}></HeaderBase>;
};

export default IsedolHeader;
