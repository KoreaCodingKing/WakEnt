import { AnimateSharedLayout, motion, Variants } from 'framer-motion';
import Image from 'next/image';

import { GomemSeasonMembers, GomemUnitMetadata } from "../../../structs/member";
import { Card } from "../../common/Cards";
import SocialLink from "../../isedol/Members/SocialLink";

import styles from '../../../styles/components/gomem/DetailUnitPage.module.scss';

interface PlanetGomemProps {
  backgroundColor: string,
  minHeight: string,
  unit: GomemUnitMetadata | undefined,
  activeMember: number | null,
  variants: Variants
}
const PlanetGomem = (
  {
    backgroundColor,
    minHeight,
    unit,
    activeMember,
    variants
  }: PlanetGomemProps) => {
  return (
    <>
      {unit && (activeMember || activeMember===0) && (
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
            {unit && (activeMember || activeMember===0) &&
              GomemSeasonMembers[unit.members[activeMember]].image && (
              <Image
                className={styles.cardMemberImage}
                blurDataURL={
                  GomemSeasonMembers[unit.members[activeMember]].image
                }
                placeholder="blur"
                src={
                  GomemSeasonMembers[unit.members[activeMember]].image
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
            template="auto auto 1 2"
            mobileTemplate="1 1 2 3"
            className={styles.descriptionCard}
            backgroundColor={backgroundColor}
            minHeight={minHeight}
          >
            <AnimateSharedLayout>
              <div className={styles.memberMeta}>
                <motion.h1
                  layout
                  initial="initial"
                  animate="visible"
                  variants={variants}
                >
                  {
                    GomemSeasonMembers[unit.members[activeMember]].name.ko
                  }
                </motion.h1>
                <motion.p
                  layout
                  initial="initial"
                  animate="visible"
                  variants={variants}
                >
                  {
                    GomemSeasonMembers[unit.members[activeMember]].description
                  }
                </motion.p>
              </div>
            </AnimateSharedLayout>
          </Card>
          <Card
            index={1}
            flex
            center
            normalSize
            template="auto auto 3 4"
            mobileTemplate="1 1 2 3"
            className={styles.descriptionCard}
            backgroundColor={backgroundColor}
            minHeight={minHeight}
          >
            <AnimateSharedLayout>
              <div className={styles.memberMeta}>
                <motion.div
                  className={styles.careers}
                  layout
                  initial="initial"
                  animate="visible"
                  variants={variants}
                >
                  {
                    GomemSeasonMembers[unit.members[activeMember]].career.map((v, i) => {
                      return (
                        <p key={`career-${i}`}>
                          {v.date}. {v.desc}
                        </p>
                      );
                    }
                    )
                  }
                </motion.div>
              </div>
            </AnimateSharedLayout>
          </Card>
          <Card
            className={styles.Gomem_socialLinks}
            index={2}
            template="auto auto 5 6"
            mobileTemplate="1 1 3 4"
            backgroundColor={backgroundColor}
            minHeight={minHeight}
          >
            <>
              <p>SocialLinks</p>
              <div className={styles.social_link}>
                {GomemSeasonMembers[unit.members[activeMember]].links.map(
                  (link, index) => {
                    if (link.link.length === 0) {
                      return;
                    }

                    return (
                      <SocialLink key={`social-link-${index}`} name={link.name} link={link.link} icon={link.icon} white ></SocialLink>
                    );
                  }
                )}
              </div>
            </>
          </Card>
        </>
      )}
    </>
  );
};

export default PlanetGomem;