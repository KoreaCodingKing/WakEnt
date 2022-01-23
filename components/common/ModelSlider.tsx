import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CharacterModel } from '../../structs/member';
import styles from '../../styles/components/common/ModelSlider.module.scss';
import { concatClass } from '../../utils/class';
import { ChevronIcon } from './icons/Chevron';
import PageIndicator from './PageIndicator';

interface ModelSliderProps {
  models: CharacterModel[]
  initialIndex?: number
  white?: boolean
}

export const ModelSlider = ({
  models,
  initialIndex = 0,
  white,
}: ModelSliderProps) => {
  const [index, setIndex] = useState<number>(initialIndex);

  const changeIndex = (direction: number) => {
    if (direction < 0 && index === 0) {
      setIndex(models.length + direction);
      return;
    } else if (direction > 0 && index >= models.length - 1) {
      setIndex(direction - 1);
      return;
    }

    setIndex(index + direction);
  };

  useEffect(() => {
    setIndex(initialIndex ?? 0);
  }, [models]);

  return (
    <div className={concatClass(styles.model_slider, white && styles.white)}>
      <div className={styles.model_slider_inner}>
        <button className={styles.prev_button} onClick={() => changeIndex(-1)}>
          <ChevronIcon width={22} stroke={1}></ChevronIcon>
        </button>
        <div className={styles.character_wrapper}>
          <div className={styles.character}>
            {models.map((model: CharacterModel, modelIndex: number) => {
              return (
                <div
                  key={`model-image-${modelIndex}-${model.image}`}
                  className={styles.image_wrapper}
                  data-active={modelIndex === index}
                >
                  <Image
                    src={model.image}
                    layout='fill'
                    priority
                    placeholder='blur'
                    blurDataURL={model.image}
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>
        <button className={styles.next_button} onClick={() => changeIndex(1)}>
          <ChevronIcon width={22} right stroke={1}></ChevronIcon>
        </button>
      </div>
      <div className={styles.pages}>
        <PageIndicator
          page={index}
          pageCount={models.length}
          setPage={to => setIndex(to)}
        ></PageIndicator>
      </div>
    </div>
  );
};

export default ModelSlider;
