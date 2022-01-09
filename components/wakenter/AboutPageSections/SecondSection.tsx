import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, MotionValue, useMotionValue } from 'framer-motion';

import styles from '../../../styles/components/wakenter/AboutPageSections/SecondSection.module.scss';
import { concatClass } from '../../../utils/class';
import { scrollHandler } from '../../../pages/about';

interface SecondSectionProps {
  className: string,
  current: boolean,
  onScroll: (index: number, callback: scrollHandler) => void
}

interface OfficeImage {
  path: string,
  desc: string,
  left: MotionValue<number>,
  translateX: MotionValue<number>,
  top: MotionValue<number>
}

const SecondSection = ({className, current, onScroll}: SecondSectionProps) => {
  const officeImages: OfficeImage[] = [
    {
      path: '/images/building/officetemp/bg_office_enterance.png',
      desc: '왁엔터테인먼트 입구',
      left: useMotionValue(30),
      translateX: useMotionValue(50),
      top: useMotionValue(0)
    },
    {
      path: '/images/building/officetemp/bg_office_enterance_door.png',
      desc: '왁엔터테인먼트 입구 현관',
      left: useMotionValue(50),
      translateX: useMotionValue(50),
      top: useMotionValue(0)
    },
    {
      path: '/images/building/officetemp/bg_office_info.png',
      desc: '왁엔터테인먼트 안내데스크',
      left: useMotionValue(70),
      translateX: useMotionValue(50),
      top: useMotionValue(0)
    },
    {
      path: '/images/building/officetemp/bg_office_hallway.png',
      desc: '왁엔터테인먼트 사무실 복도',
      left: useMotionValue(30),
      translateX: useMotionValue(50),
      top: useMotionValue(20)
    },
    {
      path: '/images/building/officetemp/bg_office_lounge.png',
      desc: '왁엔터테인먼트 라운지',
      left: useMotionValue(50),
      translateX: useMotionValue(50),
      top: useMotionValue(20)
    },
    {
      path: '/images/building/officetemp/bg_office_audio_visual_room.png',
      desc: '왁엔터테인먼트 시청각실',
      left: useMotionValue(70),
      translateX: useMotionValue(50),
      top: useMotionValue(20)
    }
  ];

  useEffect(() => {
    onScroll(1, (top, height) => {
      // 테스트용 로그 삭제예정
      console.log('top', top);
      console.log('height', height);

      if (!current) {
        return;
      }

      if ((top / height) * 100 > 80) {
        officeImages.forEach((officeImage: OfficeImage, index: number) => {
          switch (index) {
          case 0:
            officeImage.left.set(10);
            officeImage.top.set(20);
            break;
          case 1:
            officeImage.top.set(20);
            break;
          case 2:
            officeImage.left.set(80);
            officeImage.top.set(20);
            break;
          case 3:
            officeImage.left.set(10);
            officeImage.top.set(40);
            break;
          case 4:
            officeImage.top.set(40);
            break;
          default:
            officeImage.left.set(80);
            officeImage.top.set(40);
            break;
          }
        });
      }

      console.log('do?');

      console.log(officeImages);
    });
  }, []);

  return(
    <section className={concatClass(className)} data-index={1}>
      <div className={styles.second_section_inner}>
        <div className={styles.inner_wrapper}>
          {officeImages.map((officeImage: OfficeImage, index: number) => {
            return (
              <motion.div
                key={index}
                className={styles.image_container}
                style={{
                  zIndex: index,
                  left: `${officeImages[index].left.get()}%`,
                  translateX: `${-officeImages[index].translateX.get()}%`,
                  top: `${officeImages[index].top.get()}%`
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
      </div>
    </section>
  );
};

export default SecondSection;