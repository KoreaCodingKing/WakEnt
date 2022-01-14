import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { AboutSectionProps } from "../../../pages/about";
import { concatClass } from "../../../utils/class";
import styles from '../../../styles/components/wakenter/AboutPageSections/FourthSection.module.scss';
import Image from "next/image";
import { clamp } from "../../../utils/number";

const FourthSection = ({ className, onScroll }: AboutSectionProps) => {
  const springOptions = {
    stiffness: 1000,
    damping: 100,
  };

  const firstOpacity = useSpring(0.06, springOptions);
  const secondOpacity = useSpring(0.06, springOptions);

  useEffect(() => {
    onScroll(3, (top, height) => {
      firstOpacity.set(clamp(top / (height / 10), 0, 1));
      secondOpacity.set(clamp((top - 100) / (height / 10), 0, 1));
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
              <Image src={'/images/building/recording_room_mixer.png'} alt="믹서 기기" layout="fill"></Image>
            </div>
            <div className={styles.title_wrapper}>
              <p className={styles.title}>업계 최고 오디오 장비 도입</p>
              <p className={styles.subtitle}>회사 스튜디오 내에 업계 최고급 오디오 장비를 구비하여 소비자에게 최고의 경험을 선사하고자 노력하고 있습니다.</p>
            </div>
          </motion.div>
          <motion.div className={styles.crew_container}
            style={{
              opacity: secondOpacity
            }}>
            <div className={styles.image_wrapper}>
              <Image src={'/images/member/benzenpro.jpg'} alt="벤젠프로" layout="fill"></Image>
            </div>
            <div className={styles.title_wrapper}>
              <p className={styles.title}>세계 최고의 스태프</p>
              <p className={styles.subtitle}>각 분야 극한의 알잘딱 실력자들이 모인 스튜디오에서 원하는 것을 모두 이룰 수 있습니다.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;