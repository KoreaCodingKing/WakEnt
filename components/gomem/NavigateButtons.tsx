import { useRecoilState } from 'recoil';
import { concatClass } from '../../utils/class';
import ChevronIcon from '../common/icons/Chevron';
import { PlanetKeys, PlanetKeysArray } from './Planets';

import styles from '../../styles/components/gomem/NavigateButtons.module.scss';
import { gomemActiveIndexState } from '../../states/gomem/active';

const usePlanetSlider: () => [() => void, () => void] = () => {
  const [index, setIndex] = useRecoilState(gomemActiveIndexState);

  const prev = () => {
    setIndex(index - 1 < 0 ? PlanetKeysArray.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index + 1 >= PlanetKeysArray.length ? 0 : index + 1);
  };

  return [prev, next];
};

export const GomemNavigateButton = () => {
  const [prev, next] = usePlanetSlider();

  return (
    <>
      <div
        className={concatClass(styles.navigateButton, styles.left)}
        onClick={prev}
      >
        <ChevronIcon width={32} stroke={0}></ChevronIcon>
      </div>
      <div
        className={concatClass(styles.navigateButton, styles.right)}
        onClick={next}
      >
        <ChevronIcon right width={32} stroke={0}></ChevronIcon>
      </div>
    </>
  );
};

export default GomemNavigateButton;
