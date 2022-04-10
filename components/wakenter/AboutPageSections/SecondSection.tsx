import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useSpring,
} from 'framer-motion';

import styles from '../../../styles/components/wakenter/AboutPageSections/SecondSection.module.scss';
import { classes } from '../../../utils/class';
import { AboutSectionProps } from '../../../pages/about';
import Photo from '../Photo';
import ChevronIcon from '../../common/icons/Chevron';

interface OfficeImage {
  path: string
  title: string,
  desc: string,
}

interface ImageTransformData {
  x: MotionValue<number>
  y: MotionValue<number>
  scale: MotionValue<number>
  rotate: MotionValue<number>
}

const SecondSection = ({ className, onScroll }: AboutSectionProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null);
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);

  const images: OfficeImage[] = [
    {
      path: '/images/building/entrance.png',
      title: '왁엔터테인먼트 입구',
      desc: '사무실 입구 앞 입니다. 엘레베이터에 내린 후 바로 볼 수 있습니다.'
    },
    {
      path: '/images/building/entrance_door.png',
      title: '왁엔터테인먼트 입구 현관',
      desc: '사무실 현관입니다. 바로 안내데스크에서 안내를 받을 수 있습니다.'
    },
    {
      path: '/images/building/recording_room_mixer.png',
      title: '왁엔터테인먼트 스튜디오',
      desc: '왁엔터테인먼트 최고의 음악 장비들이 있는 곳입니다.'
    },
    {
      path: '/images/building/member_hall.png',
      title: '왁엔터테인먼트 멤버 복도',
      desc: '왁엔터테인먼트의 아이돌 이세계아이돌 이미지가 있는 복도입니다. 산소 발생기를 설치하여 편히 다닐 수 있습니다.'
    },
    {
      path: '/images/building/dance_room.png',
      title: '왁엔터테인먼트 안무 연습실',
      desc: '최신 방음벽과 독일제 목재 바닥으로 최고의 컨디션으로 안무를 출 수 있는 곳입니다.'
    },
    {
      path: '/images/building/av_room.png',
      title: '왁엔터테인먼트 시청각실',
      desc: '왁엔터테인먼트의 시청각실로 최고의 음향과 프로젝터로 시청각 자료를 볼 수 있습니다.'
    },
  ];

  const transforms = useRef<ImageTransformData[]>(
    new Array(6).fill(0).map((_, i) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const x = useSpring(-25 - (i % 3) * 30, {
        stiffness: 1000,
        damping: 100,
      });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const y = useSpring(0 + Math.floor(i / 3) * 40, {
        stiffness: 1000,
        damping: 100,
      });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const scale = useSpring(1);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const rotate = useSpring(Math.random() * (10 - (-10)) + (-10));

      return {
        x,
        y,
        scale,
        rotate
      };
    })
  );

  useEffect(() => {
    onScroll(1, (top) => {
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
  }, [onScroll, selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const selectedTransform = transforms.current[selectedIndex];
    selectedTransform.scale.set(2);
    transforms.current[selectedIndex].rotate.set(0);


    if (selectedIndex === 0 || selectedIndex % 3 === 0) {
      transforms.current[selectedIndex].x.set(2);
    } else if(selectedIndex % 3 === 2) {
      transforms.current[selectedIndex].x.set(-105);
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
        transform: useMotionTemplate`translateX(${d.x}%) translateY(${d.y}%) scale(${d.scale}) rotate(${d.rotate}deg)`,
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

    setSelectedIndex(index);
  };

  return (
    <section className={classes(className)} data-index={1}>
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
                  setIsShowDetail(false);
                  photoClickHandler(index);
                }}
              >
                <Photo src={officeImage.path}></Photo>
                <div className={styles.mouseOver_desc}>
                  <p className={
                    classes(
                      styles.office_detail,
                      selectedIndex === index && styles.selected
                    )
                  }
                  >{officeImage.title}</p>
                </div>
                {(selectedIndex || selectedIndex===1 || selectedIndex === 0) && selectedIndex === index && (
                  <div className={styles.selected_mouseOver}>

                    {!isShowDetail && (
                      <p className={styles.btn_desc}
                        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                          e.stopPropagation();
                          setIsShowDetail(true);
                        }
                      }>클릭하여 상세보기</p>
                    )}

                    {isShowDetail && (
                      <div className={styles.detail_desc}>
                        <div className={styles.closeicon_cover}
                          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                            e.stopPropagation();
                            setIsShowDetail(false);
                         }}>
                          <ChevronIcon stroke={1} right></ChevronIcon>
                        </div>
                        <p className={styles.photo_title}>{officeImage.title}</p>
                        <p className={styles.photo_desc}>{officeImage.desc}</p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
