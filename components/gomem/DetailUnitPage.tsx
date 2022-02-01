import { useRecoilValue } from 'recoil';
import { gomemActiveState } from '../../states/gomem/active';

import styles from '../../styles/components/gomem/DetailUnitPage.module.scss';
import { concatClass } from '../../utils/class';
import ChevronIcon from '../common/icons/Chevron';
import { Planets } from './Planets';

export const DetailUnit = () => {
  const active = useRecoilValue(gomemActiveState);

  const planet = Planets[active.planet];

  return (
    <div className={concatClass(styles.page, active.detail && styles.open)}>
      <div className={styles.contents}>
        <div className={styles.goBack}>
          <ChevronIcon stroke={5}></ChevronIcon>
        </div>
        <h1 className={styles.planetTitle}>{planet.name}</h1>
      </div>
    </div>
  );
};

export default DetailUnit;
