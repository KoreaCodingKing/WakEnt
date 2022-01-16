import { ReactNode } from 'react';
import styles from '../../styles/components/common/Button.module.scss';
import { concatClass } from '../../utils/class';

interface ButtonProps {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  active,
  onClick
}: ButtonProps) => {
  return (
    <div className={concatClass(styles.button, active && styles.active)} onClick={() => onClick && onClick()}>
      {children}
    </div>
  );
};

export default Button;
