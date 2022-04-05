import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  Variants,
} from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useRecoilState } from 'recoil';
import { gomemActiveState } from '../../states/gomem/active';
import { GomemContents, gomemContents } from '../../structs/gomemContents';
import {
  GomemSeasonMembers,
  GomemUnits,
} from '../../structs/member';

import styles from '../../styles/components/gomem/DetailUnitPage.module.scss';
import { classes } from '../../utils/class';
import { useHashState } from '../../utils/state';
import Button from '../common/Button';
import { Card } from '../common/Cards';
import ChevronIcon from '../common/icons/Chevron';
import YouTubePlayerOverlay from '../common/YouTubePlayerOverlay';
import YouTubeCard from '../isedol/YouTubeCard';
import PlanetGomem from './PlanetContents/PlanetGomem';
import { isValidPlanetName, PlanetKeys, Planets } from './Planets';

const variants: Variants = {
  initial: (custom) => ({
    opacity: 0,
    translateY: (custom + 1) * 20,
  }),
  visible: (custom) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: (custom + 1) * 0.06,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  }),
};

export const DetailUnit = () => {
  const backgroundColor = '#1b1f21';
  const minHeight = '100';
  const [active, setActiveState] = useRecoilState(gomemActiveState);
  const [youtubeID, setYoutubeID] = useState<string>('');
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [tab, setTab] = useState<string>('Songs');
  const [_hash, setState] = useHashState<PlanetKeys | null>(
    active.detail ? active.planet : null,
    (s) => {
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

  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  useEffect(() => {
    setActiveMember(null);
    setState(active.detail ? active.planet : null);
  }, [active.planet, active.detail, setState]);
  
  const close = useCallback(() => {
    setActiveState({
      planet: active.planet,
      detail: false,
    });
  }, [active.planet, setActiveState]);
  
  const planet = Planets[active.planet];
  
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const unit = planet.planet && GomemUnits[planet.planet];

  useEffect(() => {
    setActiveMember(null);
  }, [planet]);

  // TODO : Card Grid에 스크롤바 없이 부드럽게 스크롤할 수 있도록 구현

  return (
    <div className={classes(styles.page, active.detail && styles.open)}>
      <Head>
        <meta name='theme-color' content={active.detail ? '#121415' : ''}></meta>
      </Head>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <div className={
        classes(
          styles.innerPage,
          planet && planet.planet === 'contents' && styles.flex_column
        )}>
        <div className={styles.goBack} onClick={close}>
          <ChevronIcon stroke={1}></ChevronIcon>
        </div>
        <AnimatePresence>
          <div className={styles.contents}>
            <div className={styles.unitBrief}>
              <div className={styles.unitsInner}>
                <div className={styles.contents}>
                  <motion.h1
                    key={`name-${active.detail}`}
                    custom={0}
                    initial="initial"
                    animate="visible"
                    variants={variants}
                    className={styles.title}
                  >
                    {planet.name}
                  </motion.h1>
                  <motion.p
                    key={`description-${active.detail}`}
                    custom={1}
                    initial="initial"
                    animate="visible"
                    variants={variants}
                    className={styles.description}
                  >
                    {planet.description}
                  </motion.p>
                </div>
                <div className={styles.members}>
                  {unit &&
                    unit.members.map((key, index) => {
                      const member = GomemSeasonMembers[key];
                      return (
                        <motion.div
                          custom={2 + index}
                          key={`${key}-button-${active.detail}`}
                          className={styles.memberButton}
                          data-active={index === activeMember}
                          initial="initial"
                          animate="visible"
                          variants={variants}
                          onClick={() =>
                            setActiveMember(activeMember === index ? null : index)
                          }
                        >
                          <div className={styles.memberImage}>
                            {member.image && (
                              <Image
                                src={member.image}
                                width={100}
                                height={100}
                              />
                            )}
                          </div>
                          <span className={styles.memberName}>
                            {member.name.ko}
                          </span>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={styles.unitContents}>
              <div className={styles.selectBox}>
                <Button
                  onClick={() => {
                    setTab('Songs');
                  }}
                  active={tab === 'Songs'}
                >
                  songs
                </Button>
                <Button
                  onClick={() => {
                    setTab('Contents');
                  }}
                  active={tab === 'Contents'}
                >
                  contents
                </Button>
              </div>
              <motion.div
                layout
                className={styles.grid}
                key={`grid-${active.detail}-${activeMember}`}
              >
                {active.planet === 'contents' ? (
                  <>
                    {unit && (activeMember || activeMember===0) &&
                      gomemContents[unit.members[activeMember]]
                      .filter((content: GomemContents) => content.type === tab).length === 0 ?
                      (
                        <div>
                          <p>앗! 컨텐츠를 못찾았습니다.</p>
                        </div>
                      ) : 
                      unit && (activeMember || activeMember===0) &&
                      gomemContents[unit.members[activeMember]].filter((content: GomemContents) =>
                        content.type === tab
                      ).map((content: GomemContents) => {
                        return (
                          <YouTubeCard
                            key={`personal-cover-${content.links}`}
                            title={content.title}
                            id={content.links}
                            isBlackBG={true}
                            onClick={id => openYouTube(id)}
                          ></YouTubeCard>
                        );
                      })
                    }
                  </>
                ) : 
                active.planet === 'gomem' || active.planet === 'specter' ? (
                  <PlanetGomem backgroundColor={backgroundColor}
                    activeMember={activeMember}
                    minHeight={minHeight}
                    unit={unit}
                    variants={variants}
                  ></PlanetGomem>
                ) : null}
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DetailUnit;
function openYouTube(id: string): void {
  throw new Error('Function not implemented.');
}

