import { useEffect } from 'react';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';
import { concatClass } from '../../../utils/class';
import { AboutSectionProps } from '../../../pages/about';
import styles from '../../../styles/components/wakenter/AboutPageSections/ThirdSection.module.scss';
import { clamp } from '../../../utils/number';

const ThirdSection = ({
  className,
  onScroll,
  setHeaderWhite,
}: AboutSectionProps) => {
  const springOptions = {
    stiffness: 1000,
    damping: 100,
  };

  const opacity = useSpring(0.06, springOptions);
  const letterSpacing = useSpring(3, springOptions);
  const letterTemplate = useMotionTemplate`${letterSpacing}vw`;

  useEffect(() => {
    onScroll(2, (top, height, renderAll) => {
      setHeaderWhite && !renderAll && setHeaderWhite(top > height / 6 && top < height - 100);

      const tProgress = clamp(top / 200, 0, 1);

      opacity.set(clamp(tProgress, 0.06, 1));
      letterSpacing.set((1 - tProgress) * 3 - 0.3);
    });
  }, [letterSpacing, onScroll, opacity, setHeaderWhite]);

  return (
    <section className={concatClass(className)} data-index={2}>
      <div className={styles.section_container}>
        <div className={styles.contents_wrapper}>
          <motion.p
            className={styles.content}
            style={{
              opacity: opacity,
              letterSpacing: letterTemplate,
            }}
          >
            이 세상 어디에도 없는<br></br>신개념 엔터테인먼트
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
