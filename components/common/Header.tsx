import { ReactNode } from 'react';
import styles from '../../styles/components/Header.module.scss';
import { concatClass } from '../../utils/class';

export interface HeaderBaseProps {
  fixed?: boolean
  left?: ReactNode
  right?: ReactNode
  white?: boolean
}

export const HeaderBase = (props: HeaderBaseProps) => {
  return (
    <div
      className={concatClass(
        styles.header,
        props.fixed && styles.fixed,
        props.white && styles.white
      )}
    >
      <div className={styles.left}>{props.left}</div>
      <div className={styles.right}>{props.right}</div>
    </div>
  );
};

export default HeaderBase;
