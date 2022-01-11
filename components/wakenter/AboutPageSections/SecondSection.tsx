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

      setIsScrolled(top > threshold);

      if (top > threshold) {
        for (let i = 0; i < transforms.current.length; i++) {
          if (i === selectedIndex) {
            continue;
          }

          transforms.current[i].x.set(-80 + (i % 3) * 30);
          transforms.current[i].y.set(-20 + Math.floor(i / 3) * 40);
        }
      } else {
        for (let i = 0; i < transforms.current.length; i++) {
          if (i === selectedIndex) {
            continue;
          }

          transforms.current[i].x.set(-25 - (i % 3) * 30);
          transforms.current[i].y.set(0 - Math.floor(i / 3) * 40);
        }
      }
    });
  }, [selectedIndex]);

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

  const photoClickHandler = (index: number) => {
    if (selectedIndex !== null && selectedIndex !== index) {
      photoClickHandler(selectedIndex);
    }

    if (selectedIndex === index) {
      transforms.current[index].rotate.set(Math.random() * (10 - (-10)) + (-10));
      transforms.current[index].scale.set(1);

      if (isScrolled) {
        transforms.current[index].x.set(-80 + (index % 3) * 30);
        transforms.current[index].y.set(-20 + Math.floor(index / 3) * 40);
      } else {
        transforms.current[index].x.set(-25 - (index % 3) * 30);
        transforms.current[index].y.set(0 - Math.floor(index / 3) * 40);
      }
      setSelectedIndex(null);
      return;
    }

    transforms.current[index].rotate.set(0);
    transforms.current[index].scale.set(2);
    setSelectedIndex(index);
  };

  return (
    <section className={concatClass(className)} data-index={1}>
      <div className={styles.second_section_inner}>
        <div className={styles.inner_wrapper}>
          {images.map((officeImage: OfficeImage, index: number) => {
            return (
              <motion.div
                key={index}
                className={styles.image_container}
                data-active={selectedIndex === index}
                style={{
                  zIndex: index,
                  top: `${Math.floor(index / 3) * 20}%`,
                  left: `${30 + (index % 3) * 20}%`,
                  transform: imageMotionTemplate[index].transform
                }}
                onHoverStart={() => selectedIndex === null && transforms.current[index].scale.set(1.1)}
                onHoverEnd={() => selectedIndex === null && transforms.current[index].scale.set(1)}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  event.preventDefault();
                  photoClickHandler(index);
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
