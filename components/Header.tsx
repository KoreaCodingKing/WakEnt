import styles from '../styles/Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.logo_box}>
        <div className={styles.logo}></div>
      </h1>
      <div className={styles.menu_box}>
        <button className={styles.btn_about}>ABOUT</button>
        <button className={styles.btn_contact}>CONTACT</button>
        <button className={styles.btn_members}>MEMBERS</button>
        <div className={styles.members_group_box}>
          <p>GROUP</p>
          <p>이세돌</p>
          <p>STATICMEMBER</p>
          <p>고멤시즌1</p>
          <p>고멤시즌2</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
