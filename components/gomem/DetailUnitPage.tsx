import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { gomemActiveState } from '../../states/gomem/active';

import styles from '../../styles/components/gomem/DetailUnitPage.module.scss';
import { concatClass } from '../../utils/class';
import { useHashState } from '../../utils/state';
import ChevronIcon from '../common/icons/Chevron';
import { isValidPlanetName, PlanetKeys, Planets } from './Planets';

export const DetailUnit = () => {
  const [active, setActiveState] = useRecoilState(gomemActiveState);
  const [_hash, setState] = useHashState<PlanetKeys | null>(
    active.detail ? active.planet : null,
    s => {
      if (!s.length && active.detail) {
        setActiveState({
          planet: active.planet,
          detail: false,
        });

        return;
      }

      if (!isValidPlanetName(s)) {
        return;
      }

      setActiveState({
        planet: s,
        detail: true,
      });
    }
  );

  useEffect(() => {
    setState(active.detail ? active.planet : null);
  }, [active.planet, active.detail, setState]);

  const close = useCallback(() => {
    setActiveState({
      planet: active.planet,
      detail: false,
    });
  }, [active.planet, setActiveState]);

  const planet = Planets[active.planet];

  return (
    <div className={concatClass(styles.page, active.detail && styles.open)}>
      <div className={styles.goBack} onClick={close}>
        <ChevronIcon stroke={1}></ChevronIcon>
      </div>
      <div className={styles.contents}>
        <div className={styles.unitBrief}>
          <div className={styles.contents}>
            <h1 className={styles.title}>{planet.name}</h1>
            <p className={styles.description}>{planet.description}</p>
          </div>
        </div>
        <div className={styles.unitContents}>
          <h1>Contents</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailUnit;
