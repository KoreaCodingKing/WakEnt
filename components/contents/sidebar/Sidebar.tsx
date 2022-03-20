import styles from '../../../styles/components/contents/sidebar/Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.select_box}>
      <div className={styles.select}
        onClick={() => true}></div>
    </div>
  )
}

export default Sidebar;