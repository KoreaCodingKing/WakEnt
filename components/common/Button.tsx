import { ReactNode } from 'react';
import styles from '../../styles/components/common/Button.module.scss';

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export const Button = ({
  children,
  onClick
}: ButtonProps) => {
  return (
    <div className={styles.button} onClick={() => onClick && onClick()}>
      {children}
    </div>
  );
};

export default Button;
