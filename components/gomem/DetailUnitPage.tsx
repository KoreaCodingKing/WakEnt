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
  CSSProperties,
  ReactNode,
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
  GomemSeason2Members,
  GomemUnits,
} from '../../structs/member';

import styles from '../../styles/components/gomem/DetailUnitPage.module.scss';
import { classes } from '../../utils/class';
import { useHashState } from '../../utils/state';
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

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    rotateX: 30,
    rotateY: -20,
  },
  visible: (custom) => ({
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      delay: (custom + 1) * 0.06,
      type: 'spring',
      stiffness: 100,
      damping: 6,
    },
  }),
  hover: {
    scale: 0.95,
  },
};

type ColumnRowType = number | 'auto'
type CardTemplateString =
  `${ColumnRowType} ${ColumnRowType} ${ColumnRowType} ${ColumnRowType}`

interface CardStyles extends CSSProperties {
  '--cs': string
  '--ce': string
  '--rs': string
  '--re': string
  '--csm': string
  '--cem': string
  '--rsm': string
  '--rem': string
}

interface CardProps {
  index?: number
  padding?: boolean
  children: ReactNode
  className?: string
  template?: CardTemplateString
  mobileTemplate?: CardTemplateString
  normalSize?: boolean
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
  className,
  template,
  mobileTemplate,
  normalSize,
  flexColumn,
  thumbnail,
  center,
  centerColumn,
}: CardProps) => {
  const templateArray = template && template.split(' ');
  const mobileTemplateArray = mobileTemplate && mobileTemplate.split(' ');

  return (
    <motion.div
      custom={index}
      initial="initial"
      animate="visible"
      variants={cardVariants}
      className={classes(
        styles.card,
        padding && styles.padding,
        flex && styles.flex,
        normalSize && styles.normalSize,
        flexColumn && styles.flexColumn,
        thumbnail && styles.thumbnail,
        className
      )}
      whileHover="hover"
      style={
        templateArray
          ? ({
            transform: 'translateX(0)',
            '--cs': templateArray[0],
            '--ce': templateArray[1],
            '--rs': templateArray[2],
            '--re': templateArray[3],
            '--csm': mobileTemplateArray && mobileTemplateArray[0],
            '--cem': mobileTemplateArray && mobileTemplateArray[1],
            '--rsm': mobileTemplateArray && mobileTemplateArray[2],
            '--rem': mobileTemplateArray && mobileTemplateArray[3],
          } as CardStyles)
          : {
            transform: 'translateX(0)',
          }
      }
    >
      {center ? (
        <div
          className={classes(
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
  const unit = planet.unit && GomemUnits[planet.unit];

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
                    const member = GomemSeason2Members[key];

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
                    >
                      {unit &&
                        GomemSeason2Members[unit.members[activeMember]]
                          .image && (
                        <Image
                          className={styles.cardMemberImage}
                          blurDataURL={
                            GomemSeason2Members[unit.members[activeMember]]
                              .image
                          }
                          placeholder="blur"
                          src={
                            GomemSeason2Members[unit.members[activeMember]]
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
                                GomemSeason2Members[unit.members[activeMember]]
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
                                GomemSeason2Members[unit.members[activeMember]]
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
                    >
                      {/* <ImageSlider></ImageSlider> */}
                    </Card>
                    {unit &&
                      GomemSeason2Members[unit.members[activeMember]].links.map(
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
