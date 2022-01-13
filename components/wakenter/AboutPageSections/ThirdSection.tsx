import { useEffect, useRef } from 'react';
import { motion, MotionValue, useMotionTemplate, useMotionValue } from 'framer-motion';
import { concatClass } from '../../../utils/class';
import { scrollHandler } from '../../../pages/about';
import styles from '../../../styles/components/wakenter/AboutPageSections/ThirdSection.module.scss';
import { easeOutExpo } from '../../../utils/number';

interface ThirdSectionProps {
  className: string,
  current: boolean,
  onScroll: (index: number, callback: scrollHandler) => void
}

interface TextTransformData {
  opacity: MotionValue<number>,
  letterSpacing: MotionValue<number>
}

const ThirdSection = ({ className, onScroll }: ThirdSectionProps) => {
  const textMotionValues = useRef<TextTransformData>({
    opacity: useMotionValue(1),
    letterSpacing: useMotionValue(10)
  });

  const textMotionCurrentValues: TextTransformData = {
    opacity: textMotionValues.current.opacity,
    letterSpacing: textMotionValues.current.letterSpacing
  };

  useEffect(() => {
    onScroll(2, (top, height, renderAll) => {
      // ToDo: 스크롤시 로그 안찍힘 원인파악
      console.log('top', top);
      console.log('height', height);

      // ToDo: 스크롤시 값 변환 연산
      if (textMotionCurrentValues.opacity.get() === 1 || textMotionCurrentValues.letterSpacing.get() === 10 || renderAll) {
        textMotionValues.current.opacity.set(top/100);
        textMotionValues.current.letterSpacing.set(top/10);
      }
    });
  }, []);


  return (
    <section className={concatClass(className)} data-index={2}>
      <div className={styles.section_container}>
        <div className={styles.contents_wrapper}>
          <motion.p className={styles.content}
            style={{
              opacity: textMotionCurrentValues.opacity,
              letterSpacing: textMotionCurrentValues.letterSpacing
            }}
          >이 세상 어디에도 없는<br></br>신개념 엔터테인먼트</motion.p>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;