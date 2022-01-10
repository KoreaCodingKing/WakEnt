import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import styles from '../../../styles/components/wakenter/AboutPageSections/SecondSection.module.scss';
import { concatClass } from '../../../utils/class';
import { scrollHandler } from '../../../pages/about';
import Photo from '../Photo';

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
  springX: MotionValue<number>
  springY: MotionValue<number>
  scale: MotionValue<number>
}

const SecondSection = ({ className, onScroll }: SecondSectionProps) => {
  const images: OfficeImage[] = [
    {
      path: '/images/building/entrance.png',
      desc: '왁엔터테인먼트 입구',
    },
    {
      path: '/images/building/entrance_door.png',
      desc: '왁엔터테인먼트 입구 현관',
    },
    {
      path: '/images/building/recording_room_mixer.png',
      desc: '왁엔터테인먼트 스튜디오',
    },
    {
      path: '/images/building/member_hall.png',
      desc: '왁엔터테인먼트 멤버 복도',
    },
    {
      path: '/images/building/dance_room.png',
      desc: '왁엔터테인먼트 안무 연습실',
    },
    {
      path: '/images/building/av_room.png',
      desc: '왁엔터테인먼트 시청각실',
    },
  ];

  const transforms = useRef<ImageTransformData[]>(
    new Array(6).fill(0).map(() => {
      const x = useMotionValue(-50);
      const y = useMotionValue(0);

      const springX = useSpring(x, {
        stiffness: 1000,
        damping: 100,
      });

      const springY = useSpring(y, {
        stiffness: 1000,
        damping: 100,
      });

      const scale = useSpring(1);

      return {
        x,
        y,
        springX,
        springY,
        scale
      };
    })
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
      useMotionTemplate`translateX(${d.springX}%) translateY(${d.springY}%) scale(${d.scale})`
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
                  transform: imageMotionTemplate[index]
                }}
                onHoverStart={() => transforms.current[index].scale.set(1.1)}
                onHoverEnd={() => transforms.current[index].scale.set(1)}
              >
                <Photo src={officeImage.path} rotate></Photo>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
