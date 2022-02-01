import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { gomemActiveState } from "../../states/gomem/active";

import styles from '../../styles/components/gomem/CurrentPlanetName.module.scss';
import { Planets } from "./Planets";

export const GomemPlanetName = () => {
  const { planet } = useRecoilValue(gomemActiveState);

  return (
    <motion.div className={styles.planetName}>
      <AnimatePresence>
        <motion.p
          key={planet}
          initial={{ opacity: 0, translateX: -10 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 10 }}
          transition={{ type: 'spring', stiffness: 1000, damping: 100 }}
        >
          <span className={styles.title}>{Planets[planet].name}</span>
          <span className={styles.description}>{Planets[planet].description}</span>
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

export default GomemPlanetName;
