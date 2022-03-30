import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  Variants,
} from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useRecoilState } from 'recoil';
import { gomemActiveState } from '../../states/gomem/active';
import {
  getLinkType,
  getYouTubeThumbnailURL,
  LinkType,
} from '../../structs/links';
import {
  GomemSeasonMembers,
  GomemUnits,
} from '../../structs/member';

import styles from '../../styles/components/gomem/DetailUnitPage.module.scss';
import { classes } from '../../utils/class';
import { useHashState } from '../../utils/state';
import { Card } from '../common/Cards';
import FadeInImage from '../common/FadeInImage';
import ChevronIcon from '../common/icons/Chevron';
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
            <div className={styles.unitContents}>
              <motion.div
                layout
                className={styles.grid}
                key={`grid-${active.detail}-${activeMember}`}
              >
                {activeMember === null ? (
                  <></>
                ) : (
                  <>
                    <Card
                      index={0}
                      padding
                      center
                      template="1 1 1 6"
                      mobileTemplate="auto auto 1 2"
                      backgroundColor={backgroundColor}
                      minHeight={minHeight}
                    >
                      {unit &&
                        GomemSeasonMembers[unit.members[activeMember]]
                          .image && (
                        <Image
                          className={styles.cardMemberImage}
                          blurDataURL={
                            GomemSeasonMembers[unit.members[activeMember]]
                              .image
                          }
                          placeholder="blur"
                          src={
                            GomemSeasonMembers[unit.members[activeMember]]
                              .image
                          }
                          width={300}
                          height={600}
                        ></Image>
                      )}
                    </Card>
                    <Card
                      index={1}
                      flex
                      center
                      normalSize
                      template="auto auto 1 3"
                      mobileTemplate="1 1 2 3"
                      className={styles.descriptionCard}
                      backgroundColor={backgroundColor}
                      minHeight={minHeight}
                    >
                      <AnimateSharedLayout>
                        {unit && (
                          <div className={styles.memberMeta}>
                            <motion.h1
                              layout
                              initial="initial"
                              animate="visible"
                              variants={variants}
                            >
                              {
                                GomemSeasonMembers[unit.members[activeMember]]
                                  .name.ko
                              }
                            </motion.h1>
                            <motion.p
                              layout
                              initial="initial"
                              animate="visible"
                              variants={variants}
                            >
                              {
                                GomemSeasonMembers[unit.members[activeMember]]
                                  .description
                              }
                            </motion.p>
                          </div>
                        )}
                      </AnimateSharedLayout>
                    </Card>
                    <Card
                      index={2}
                      thumbnail
                      template="auto auto 3 6"
                      mobileTemplate="1 1 3 4"
                      backgroundColor={backgroundColor}
                      minHeight={minHeight}
                    >
                      {/* <ImageSlider></ImageSlider> */}
                    </Card>
                    {unit &&
                      GomemSeasonMembers[unit.members[activeMember]].links.map(
                        (link, index) => {
                          const linkType = getLinkType(link.link);

                          let image = '';

                          if (linkType === LinkType.YouTube) {
                            image = getYouTubeThumbnailURL(link.link);
                          }

                          return (
                            <Card
                              key={`card-${index}`}
                              index={3 + index}
                              padding
                              thumbnail={image.length > 0}
                              template="auto auto auto auto"
                              mobileTemplate={`auto auto ${4 + index} ${
                                5 + index
                              }`}
                              backgroundColor={backgroundColor}
                              minHeight={minHeight}
                            >
                              <Link href={link.link} passHref>
                                <a target="_blank">
                                  <FadeInImage
                                    src={image}
                                    layout="fill"
                                  ></FadeInImage>
                                </a>
                              </Link>
                            </Card>
                          );
                        }
                      )}
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DetailUnit;
