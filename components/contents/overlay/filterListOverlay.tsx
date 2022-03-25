import styles from '../../../styles/components/contents/overlay/filterListOverlay.module.scss'
import { classes } from '../../../utils/class';

interface FilterListOverlay {
  open: boolean
}

const FilterListOverlay = ({open}: FilterListOverlay) => {
  return (
    <div className={classes(styles.overlay, open && styles.open)}>
      <div className={styles.background}></div>
    </div>
  )
}

export default FilterListOverlay;