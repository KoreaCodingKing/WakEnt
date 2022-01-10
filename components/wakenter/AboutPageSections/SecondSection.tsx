import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';

import styles from '../../../styles/components/wakenter/AboutPageSections/SecondSection.module.scss';
import { concatClass } from '../../../utils/class';
import { scrollHandler } from '../../../pages/about';

interface SecondSectionProps {
  className: string
  current: boolean
  onScroll: (index: number, callback: scrollHandler) => void
}

interface OfficeImage {
  path: string
  desc: string
}

interface ImageTransformData {
  x: MotionValue<number>
  y: MotionValue<number>
}

const SecondSection = ({
  className,
  onScroll,
}: SecondSectionProps) => {
  const images: OfficeImage[] = [
    {
      path: '/images/building/officetemp/bg_office_enterance.png',
      desc: '왁엔터테인먼트 입구',
    },
    {
      path: '/images/building/officetemp/bg_office_enterance_door.png',
      desc: '왁엔터테인먼트 입구 현관',
    },
    {
      path: '/images/building/officetemp/bg_office_info.png',
      desc: '왁엔터테인먼트 안내데스크',
    },
    {
      path: '/images/building/officetemp/bg_office_hallway.png',
      desc: '왁엔터테인먼트 사무실 복도',
    },
    {
      path: '/images/building/officetemp/bg_office_lounge.png',
      desc: '왁엔터테인먼트 라운지',
    },
    {
      path: '/images/building/officetemp/bg_office_audio_visual_room.png',
      desc: '왁엔터테인먼트 시청각실',
    },
  ];

  const transforms = useRef<ImageTransformData[]>(
    new Array(6).fill(0).map(() => ({
      x: useMotionValue(-50),
      y: useMotionValue(0),
    }))
  );

  useEffect(() => {
    onScroll(1, (top, height) => {
      const threshold = height / 20;

      if (top > threshold) {
        for (let i = 0; i < transforms.current.length; i++) {
          transforms.current[i].x.set(-80 + (i % 3) * 30);
          transforms.current[i].y.set(-20 + Math.floor(i / 3) * 40);
        }
      } else {
        transforms.current.forEach((d: ImageTransformData) => {
          d.x.set(-50);
          d.y.set(0);
        });
      }
    });
  }, []);

  const imageMotionTemplate = transforms.current.map(
    (d: ImageTransformData) =>
      useMotionTemplate`translateX(${d.x}%) translateY(${d.y}%)`
  );

  return (
    <section className={concatClass(className)} data-index={1}>
      <div className={styles.second_section_inner}>
        <div className={styles.inner_wrapper}>
          {images.map((officeImage: OfficeImage, index: number) => {
            return (
              <motion.div
                key={index}
                className={styles.image_container}
                style={{
                  zIndex: index,
                  top: `${Math.floor(index / 3) * 20}%`,
                  left: `${30 + (index % 3) * 20}%`,
                  transform: imageMotionTemplate[index],
                }}
                transition={{
                  type: 'spring',
                }}
              >
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
