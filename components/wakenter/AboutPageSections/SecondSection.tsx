import { MouseEventHandler, useEffect, useRef, useState } from 'react';
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
  rotate: MotionValue<number>
}

const SecondSection = ({ className, onScroll }: SecondSectionProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null);

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
    new Array(6).fill(0).map((_, i) => {
      const x = useMotionValue(-25 - (i % 3) * 30);
      const y = useMotionValue(0 + Math.floor(i / 3) * 40);

      const springX = useSpring(x, {
        stiffness: 1000,
        damping: 100,
      });

      const springY = useSpring(y, {
        stiffness: 1000,
        damping: 100,
      });

      const scale = useSpring(1);

      const rotate = useSpring(Math.random() * (10 - (-10)) + (-10));

      return {
        x,
        y,
        springX,
        springY,
        scale,
        rotate
      };
    })
  );

  useEffect(() => {
    onScroll(1, (top, height) => {
      const threshold = 50;

      if (top > threshold) {
        for (let i = 0; i < transforms.current.length; i++) {
          transforms.current[i].x.set(-80 + (i % 3) * 30);
          transforms.current[i].y.set(-20 + Math.floor(i / 3) * 40);
        }

        if (isScrolled) {
          return;
        }
        setIsScrolled(true);
      } else {
        for (let i = 0; i < transforms.current.length; i++) {
          transforms.current[i].x.set(-25 - (i % 3) * 30);
          transforms.current[i].y.set(0 - Math.floor(i / 3) * 40);
        }

        if (!isScrolled) {
          return;
        }
        setIsScrolled(false);
      }
    });
  }, []);

  // ToDo 중복된 연산 useMemo로 처리
  // Math.floor(selectedIndex / 3), selectedIndex % 3 등 style에 있는 연산과 중복
  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const selectedTransform = transforms.current[selectedIndex];
    selectedTransform.scale.set(2);


    if (selectedIndex === 0 || selectedIndex % 3 === 0) {
      transforms.current[selectedIndex].x.set(12);
    } else if(selectedIndex % 3 === 2) {
      transforms.current[selectedIndex].x.set(-116);
    }

    if (selectedIndex === 0 || Math.floor(selectedIndex / 3) === 0) {
      transforms.current[selectedIndex].y.set(36);
    } else if(Math.floor(selectedIndex / 3) === 1) {
      transforms.current[selectedIndex].y.set(-58);
    }
  }, [selectedIndex]);

  const imageMotionTemplate = transforms.current.map(
    (d: ImageTransformData) => {
      return {
        transform: useMotionTemplate`translateX(${d.springX}%) translateY(${d.springY}%) scale(${d.scale}) rotate(${d.rotate}deg)`,
        scale: useMotionTemplate`scale(${d.scale})`
      };
    }
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
                  transform: imageMotionTemplate[index].transform
                }}
                onHoverStart={() => transforms.current[index].scale.set(1.1)}
                onHoverEnd={() => transforms.current[index].scale.set(1)}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  event.preventDefault();

                  // ToDo onclick handler로 처리
                  // transforms.current[index].x.set에 있는 연산 useMemo로 선언.
                  if (selectedIndex === index) {
                    transforms.current[index].rotate.set(Math.random() * (10 - (-10)) + (-10));
                    transforms.current[index].scale.set(1);

                    if (isScrolled) {
                      transforms.current[index].x.set(-80 + (index % 3) * 30);
                      transforms.current[index].y.set(-20 + Math.floor(index / 3) * 40);
                    } else  {
                      transforms.current[index].x.set(-25 - (index % 3) * 30);
                      transforms.current[index].y.set(0 - Math.floor(index / 3) * 40);
                    }
                    setSelectedIndex(null);
                    return;
                  }

                  transforms.current[index].rotate.set(0);
                  transforms.current[index].scale.set(2);
                  setSelectedIndex(index);
                }}
              >
                <Photo src={officeImage.path}></Photo>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
