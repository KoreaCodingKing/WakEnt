import styles from '../../styles/components/isedol/IsedolMenuOverlay.module.scss';
import { concatClass } from '../../utils/class';

interface IsedolMenuOverlayProps {
  open: boolean
}

export const IsedolMenuOverlay = ({ open }: IsedolMenuOverlayProps) => {
  return (
    <div className={concatClass(styles.overlay, open && styles.open)}>
    </div>
  );
};

export default IsedolMenuOverlay;
