import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { concatClass } from '../../../utils/class';
import { scrollHandler } from '../../../pages/about';

interface SecondSectionProps {
  className: string,
  onScroll: (index: number, callback: scrollHandler) => void
}

const SecondSection = ({className, onScroll}: SecondSectionProps) => {

  useEffect(() => {
    onScroll(1, (top, height) => {
      // ToDo 스크롤 마다 이미지 보여주기.
    });
  }, []);

  return(
    <section className={concatClass(className)} data-index={1}>
      <div>
        {/* ToDo: mark up */}
      </div>
    </section>
  );
};

export default SecondSection;