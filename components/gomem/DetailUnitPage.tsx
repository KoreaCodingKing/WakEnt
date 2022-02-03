import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { gomemActiveState } from '../../states/gomem/active';

import styles from '../../styles/components/gomem/DetailUnitPage.module.scss';
import { concatClass } from '../../utils/class';
import { useHashState } from '../../utils/state';
import ChevronIcon from '../common/icons/Chevron';
import { isValidPlanetName, PlanetKeys, Planets } from './Planets';

const variants: Variants = {
  initial: custom => ({
    opacity: 0,
    translateY: (custom + 1) * 20,
  }),
  visible: custom => ({
    opacity: 1,
    translateY: 0,
    transition: { delay: (custom + 1) * 0.06, type: 'spring', stiffness: 100, damping: 10 },
  }),
};

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    rotateX: 30,
    rotateY: -20
  },
  visible: custom => ({
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    transition: { delay: (custom + 1) * 0.06, type: 'spring', stiffness: 100, damping: 6 },
  }),
  hover: {
    scale: 0.95
  }
};

interface CardProps {
  index?: number
  padding?: boolean
  children: ReactNode
  flex?: boolean
  flexColumn?: boolean
  center?: boolean
  thumbnail?: boolean
  centerColumn?: boolean
}

const Card = ({
  index = 0,
  children,
  padding,
  flex,
  flexColumn,
  thumbnail,
  center,
  centerColumn,
}: CardProps) => {
  return (
    <motion.div
      custom={index}
      initial='initial'
      animate='visible'
      variants={cardVariants}
      className={concatClass(
        styles.card,
        padding && styles.padding,
        flex && styles.flex,
        flexColumn && styles.flexColumn,
        thumbnail && styles.thumbnail
      )}
      whileHover='hover'
    >
      {center ? (
        <div
          className={concatClass(
            styles.center,
            centerColumn && styles.centerColumn
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
};

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

  // TODO : Card Grid에 스크롤바 없이 부드럽게 스크롤할 수 있도록 구현

  return (
    <div className={concatClass(styles.page, active.detail && styles.open)}>
      <div className={styles.innerPage}>
        <div className={styles.goBack} onClick={close}>
          <ChevronIcon stroke={1}></ChevronIcon>
        </div>
        <AnimatePresence>
          <div className={styles.contents}>
            <div className={styles.unitBrief}>
              <div className={styles.contents}>
                <motion.h1
                  key={`name-${active.detail}`}
                  custom={0}
                  initial='initial'
                  animate='visible'
                  variants={variants}
                  className={styles.title}
                >
                  {planet.name}
                </motion.h1>
                <motion.p
                  key={`description-${active.detail}`}
                  custom={1}
                  initial='initial'
                  animate='visible'
                  variants={variants}
                  className={styles.description}
                >
                  {planet.description}
                </motion.p>
              </div>
            </div>
            <div className={styles.unitContents}>
              <motion.div
                layout
                className={styles.grid}
                key={`grid-${active.detail}`}
              >
                <Card index={0} padding center>
                  <Image
                    src={'/images/wakdoo.png'}
                    width={145}
                    height={300}
                  ></Image>
                </Card>
                <Card index={1} flex center>
                  <div className={styles.memberMeta}>
                    <h1>Member</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </Card>
                <Card index={2} padding>
                  <p>Hi</p>
                  <p>Hi</p>
                  <p>Hi</p>
                </Card>
                <Card index={3} padding>
                  <p>Spotify</p>
                </Card>
                <Card index={4} padding>
                  <p>Hi</p>
                </Card>
                <Card index={5} padding>
                  <p>Fi</p>
                </Card>
                <Card index={6} thumbnail>
                  <p>When?</p>
                </Card>
                <Card index={7} thumbnail>
                  <p>When?</p>
                </Card>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DetailUnit;