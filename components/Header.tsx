import styles from '../styles/components/Header.module.scss';

export const Header = (props: any) => {
  return (
    <div className={styles.header_container}>
      {props.children}
    </div>
  );
};

export default Header;
