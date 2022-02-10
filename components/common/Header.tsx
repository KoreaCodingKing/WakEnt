import { ReactNode } from 'react';
import styles from '../../styles/components/Header.module.scss';
import { classes } from '../../utils/class';

export interface HeaderBaseProps {
  fixed?: boolean
  left?: ReactNode
  right?: ReactNode
  white?: boolean
  full?: boolean
}

export const HeaderBase = (props: HeaderBaseProps) => {
  return (
    <div
      className={classes(
        styles.header,
        props.fixed && styles.fixed,
        props.white && styles.white,
        props.full && styles.full
      )}
    >
      <div className={styles.left}>{props.left}</div>
      <div className={styles.right}>{props.right}</div>
    </div>
  );
};

export default HeaderBase;
