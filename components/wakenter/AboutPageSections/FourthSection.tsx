import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { scrollHandler } from "../../../pages/about";
import { concatClass } from "../../../utils/class";
import styles from '../../../styles/components/wakenter/AboutPageSections/FourthSection.module.scss';
import Image from "next/image";
import { clamp } from "../../../utils/number";

interface FourthSectionProps {
  className: string,
  current: boolean,
  onScroll: (index: number, callback: scrollHandler) => void
}

const FourthSection = ({ className, onScroll }: FourthSectionProps) => {
  const springOptions = {
    stiffness: 1000,
    damping: 100,
  };

  const firstOpacity = useSpring(0.06, springOptions);
  const secondOpacity = useSpring(0.06, springOptions);

  useEffect(() => {
    onScroll(3, (top, height, renderAll) => {
      const tProgress = clamp(top / 500, 0, 1);

      firstOpacity.set(clamp(tProgress, 0, 1));
      secondOpacity.set(clamp(tProgress, 0, 1));
    });
  }, []);

  return (
    <section className={concatClass(className)} data-index={3}>
      <div className={styles.section_container}>
        <div className={styles.contents_wrapper}>
          <motion.div className={styles.infra_introduce}
            style={{
              opacity: firstOpacity
            }}>
            <div className={styles.image_wrapper}>
              <Image src={'/images/infra/bg_mixer.png'} alt="믹서 기기"></Image>
              <Image className={styles.second_img} src={'/images/infra/bg_recording_studio.png'} alt="녹음 스튜디오"></Image>
            </div>
            <div className={styles.title_wrapper}>
              <p className={styles.title}>업계 최고 오디오 장비 도입</p>
              <p className={styles.subtitle}>회사 스튜디오 내에 업계 최고급 오디오 장비와 악기를 구비하고 있습니다.</p>
            </div>
          </motion.div>
          <motion.div className={styles.crew_container}
            style={{
              opacity: secondOpacity
            }}>
            <div className={styles.image_wrapper}>
              <Image src={'/images/infra/bg_benzenpro_back.png'} alt="팬치"></Image>
              <Image className={styles.second_img} src={'/images/infra/bg_benzenpro.png'} alt="벤젠프로"></Image>
            </div>
            <div className={styles.title_wrapper}>
              <p className={styles.title}>세계 최고의 스태프</p>
              <p className={styles.subtitle}>각 분야의 실력자들이 모인 스튜디오에서 원하는 것을 모두 이룰 수 있습니다.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;