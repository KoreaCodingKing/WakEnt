import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, MotionValue, useMotionValue } from 'framer-motion';

import styles from '../../../styles/components/wakenter/AboutPageSections/SecondSection.module.scss';
import { concatClass } from '../../../utils/class';
import { scrollHandler } from '../../../pages/about';

interface SecondSectionProps {
  className: string,
  onScroll: (index: number, callback: scrollHandler) => void
}

interface OfficeImage {
  path: string,
  desc: string,
  left: MotionValue<number>,
  transform: MotionValue<number>,
  top: MotionValue<number>
}

const SecondSection = ({className, onScroll}: SecondSectionProps) => {
  const officeImages: OfficeImage[] = [
    {
      path: '/images/building/officetemp/bg_office_enterance.png',
      desc: '왁엔터테인먼트 입구',
      left: useMotionValue(30),
      transform: useMotionValue(50),
      top: useMotionValue(0)
    },
    {
      path: '/images/building/officetemp/bg_office_enterance_door.png',
      desc: '왁엔터테인먼트 입구 현관',
      left: useMotionValue(50),
      transform: useMotionValue(50),
      top: useMotionValue(0)
    },
    {
      path: '/images/building/officetemp/bg_office_info.png',
      desc: '왁엔터테인먼트 안내데스크',
      left: useMotionValue(70),
      transform: useMotionValue(50),
      top: useMotionValue(0)
    },
    {
      path: '/images/building/officetemp/bg_office_hallway.png',
      desc: '왁엔터테인먼트 사무실 복도',
      left: useMotionValue(30),
      transform: useMotionValue(50),
      top: useMotionValue(20)
    },
    {
      path: '/images/building/officetemp/bg_office_lounge.png',
      desc: '왁엔터테인먼트 라운지',
      left: useMotionValue(50),
      transform: useMotionValue(50),
      top: useMotionValue(20)
    },
    {
      path: '/images/building/officetemp/bg_office_audio_visual_room.png',
      desc: '왁엔터테인먼트 시청각실',
      left: useMotionValue(60),
      transform: useMotionValue(50),
      top: useMotionValue(20)
    }
  ];

  useEffect(() => {
    onScroll(1, (top, height) => {
      // 테스트용 로그 삭제예정
      console.log('top', top);
      console.log('height', height);

      if ((top / height) * 100 < 80) {
        return;
      }

      officeImages.forEach((officeImage: OfficeImage, index: number) => {
        // 스크롤 이후 이미지 위치 이동.
        // transition 속성 추가.
      });
    });
  }, []);

  // ToDo: 이미지 디자인 작업
  return(
    <section className={concatClass(className)} data-index={1}>
      <div className={styles.second_section_inner}>
        {officeImages.map((officeImage: OfficeImage, index: number) => {
          return (
            <motion.div
              key={index}
              className={styles.image_container}
              style={{
                zIndex: index,
                left: `${officeImages[index].left.get()}%`,
                translateX: `${-officeImages[index].transform.get()}%`,
                top: `${officeImages[index].top.get()}vh`
              }}>
              <div className={styles.image_inner_container}>
                <Image
                  src={officeImage.path}
                  alt={officeImage.desc}></Image>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SecondSection;