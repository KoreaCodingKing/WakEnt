import { useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from '../../../styles/components/wakenter/AboutPageSections/SecondSection.module.scss';
import { concatClass } from '../../../utils/class';
import { scrollHandler } from '../../../pages/about';

interface SecondSectionProps {
  className: string,
  onScroll: (index: number, callback: scrollHandler) => void
}

interface OfficeImages {
  path: string,
  desc: string
}

interface ImageContainerCss extends React.CSSProperties {
  '--index': string;
}

const officeImages: OfficeImages[] = [
  {
    path: '/images/building/officetemp/bg_office_enterance.png',
    desc: '왁엔터테인먼트 입구'
  },
  {
    path: '/images/building/officetemp/bg_office_enterance_door.png',
    desc: '왁엔터테인먼트 입구 현관'
  },
  {
    path: '/images/building/officetemp/bg_office_info.png',
    desc: '왁엔터테인먼트 안내데스크'
  },
  {
    path: '/images/building/officetemp/bg_office_hallway.png',
    desc: '왁엔터테인먼트 사무실 복도'
  },
  {
    path: '/images/building/officetemp/bg_office_lounge.png',
    desc: '왁엔터테인먼트 라운지'
  },
  {
    path: '/images/building/officetemp/bg_office_audio_visual_room.png',
    desc: '왁엔터테인먼트 시청각실'
  }
];

const SecondSection = ({className, onScroll}: SecondSectionProps) => {

  useEffect(() => {
    onScroll(1, (top, height) => {
      console.log('top', top);
      console.log('height', height);
    });
  }, []);

  // ToDo: 이미지 디자인 작업
  return(
    <section className={concatClass(className)} data-index={1}>
      <div className={styles.second_section_inner}>
        {officeImages.map((officeImage: OfficeImages, index: number) => {
          return (
            <div
              key={index}
              className={styles.image_container}
              style={{
                '--index': `${index}`
              } as ImageContainerCss}>
              <div className={styles.image_inner_container}>
                <Image
                  src={officeImage.path}
                  alt={officeImage.desc}></Image>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SecondSection;