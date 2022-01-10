import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, MotionValue, useMotionTemplate, useMotionValue } from 'framer-motion';

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
  top: MotionValue<number>,
  translateX: MotionValue<string>,
  translateY: MotionValue<string>
}

const SecondSection = ({className, current, onScroll}: SecondSectionProps) => {
  const officeImages: OfficeImage[] = [
    {
      path: '/images/building/officetemp/bg_office_enterance.png',
      desc: '왁엔터테인먼트 입구',
      left: useMotionValue(30),
      top: useMotionValue(0),
      translateX: useMotionValue('-50'),
      translateY: useMotionValue('0')
    },
    {
      path: '/images/building/officetemp/bg_office_enterance_door.png',
      desc: '왁엔터테인먼트 입구 현관',
      left: useMotionValue(50),
      top: useMotionValue(0),
      translateX: useMotionValue('-50'),
      translateY: useMotionValue('0')
    },
    {
      path: '/images/building/officetemp/bg_office_info.png',
      desc: '왁엔터테인먼트 안내데스크',
      left: useMotionValue(70),
      top: useMotionValue(0),
      translateX: useMotionValue('-50'),
      translateY: useMotionValue('0')
    },
    {
      path: '/images/building/officetemp/bg_office_hallway.png',
      desc: '왁엔터테인먼트 사무실 복도',
      left: useMotionValue(30),
      top: useMotionValue(20),
      translateX: useMotionValue('-50'),
      translateY: useMotionValue('0')
    },
    {
      path: '/images/building/officetemp/bg_office_lounge.png',
      desc: '왁엔터테인먼트 라운지',
      left: useMotionValue(50),
      top: useMotionValue(20),
      translateX: useMotionValue('-50'),
      translateY: useMotionValue('0')
    },
    {
      path: '/images/building/officetemp/bg_office_audio_visual_room.png',
      desc: '왁엔터테인먼트 시청각실',
      left: useMotionValue(70),
      top: useMotionValue(20),
      translateX: useMotionValue('-50'),
      translateY: useMotionValue('0')
    }
  ];

  useEffect(() => {
    onScroll(1, (top, height) => {
      // 테스트용 로그 삭제예정
      console.log('top', top);
      console.log('height', height);
      console.log((top / (height / 100)));
      if ((top / (height / 100)) * 100 > 80) {
        officeImages.forEach((officeImage: OfficeImage, index: number) => {
          switch (index) {
          case 0:
            officeImage.translateX.set('-80');
            officeImage.translateY.set('-20');
            break;
          case 1:
            officeImage.translateX.set('-50');
            officeImage.translateY.set('-20');
            break;
          case 2:
            officeImage.translateX.set('-20');
            officeImage.translateY.set('-20');
            break;
          case 3:
            officeImage.translateX.set('-80');
            officeImage.translateY.set('20');
            break;
          case 4:
            officeImage.translateX.set('-50');
            officeImage.translateY.set('20');
            break;
          default:
            officeImage.translateX.set('-20');
            officeImage.translateY.set('20');
            break;
          }
        });

        return;
      }

      officeImages.forEach((officeImage: OfficeImage, index: number) => {
        officeImage.translateX.set('-50');
        officeImage.translateY.set('0');
      });
      console.log('do?');

      console.log(officeImages);
    });
  }, []);

  const imageMotionTemplate = officeImages.map((officeImage: OfficeImage) => {
    return useMotionTemplate`translateX(${officeImage.translateX}%) translateY(${officeImage.translateY}%)`;
  }) as MotionValue<string>[];

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
                  transform: imageMotionTemplate[index],
                  top: `${officeImages[index].top.get()}%`
                }}>
                <div className={styles.image_inner_container}>
                  <Image
                    src={officeImage.path}
                    alt={officeImage.desc}
                    layout='fill'
                  ></Image>
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