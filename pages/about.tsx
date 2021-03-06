import { NextPage } from 'next';
import { useCallback, useRef, useState } from 'react';
import { useDynamicPageScroll } from '../components/common/Scroll';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import parentStyles from '../styles/pages/index.module.scss';
import styles from '../styles/components/wakenter/WakEnterAbout.module.scss';
import WakEnterMetadata from '../components/wakenter/Meta';

import FirstSection from '../components/wakenter/AboutPageSections/FirstSection';
import SecondSection from '../components/wakenter/AboutPageSections/SecondSection';
import ThirdSection from '../components/wakenter/AboutPageSections/ThirdSection';
import FourthSection from '../components/wakenter/AboutPageSections/FourthSection';
import FifthSection from '../components/wakenter/AboutPageSections/FifthSection';
import SixthSection from '../components/wakenter/AboutPageSections/SixthSection';

import Footer from '../components/wakenter/WakEnterFooter';

export type scrollHandler = (
  top: number,
  height: number,
  renderAll?: boolean
) => void

export interface AboutSectionProps {
  className?: string
  current?: boolean
  setHeaderWhite?: (white: boolean) => void
  onScroll: (index: number, callback: scrollHandler) => void
}

const About: NextPage = () => {
  const container = useRef<HTMLDivElement>(null);

  const [whiteHeader, setWhiteHeader] = useState<boolean>(true);
  const scrollHandlers = useRef<scrollHandler[]>([]);

  useDynamicPageScroll(container, `.${styles.section}`, 0, {
    offset: -50,
    callback: useCallback((page, pages, renderAll) => {
      if (renderAll) {
        for (let i = 0; i < pages.length; i++) {
          const [_active, top, height] = pages[i];

          if (scrollHandlers.current[i]) {
            scrollHandlers.current[i](top, height, renderAll);
          }
        }

        return;
      }

      if (!pages[page]) return;

      const [active, top, height] = pages[page];

      if (active && scrollHandlers.current[page]) {
        scrollHandlers.current[page](top, height, renderAll);
      }
    }, []),
  });

  const listenScrollHandler = useCallback(
    (index: number, cb: scrollHandler) => {
      const newHandlers = [...scrollHandlers.current];
      newHandlers[index] = cb;

      scrollHandlers.current = newHandlers;
    },
    []
  );

  return (
    <>
      <WakEnterMetadata title='About us'></WakEnterMetadata>
      <div className={parentStyles.main}>
        <header>
          <WakEnterHeader white={whiteHeader}></WakEnterHeader>
        </header>
        <div ref={container}>
          <FirstSection
            className={styles.section}
            setHeaderWhite={setWhiteHeader}
            onScroll={listenScrollHandler}
          ></FirstSection>
          <SecondSection
            className={styles.section}
            onScroll={listenScrollHandler}
          ></SecondSection>
          <ThirdSection
            className={styles.section}
            setHeaderWhite={setWhiteHeader}
            onScroll={listenScrollHandler}
          ></ThirdSection>
          <FourthSection
            className={styles.section}
            onScroll={listenScrollHandler}
          ></FourthSection>
          <FifthSection
            className={styles.section}
            onScroll={listenScrollHandler}
          ></FifthSection>
          <SixthSection
            className={styles.section}
            onScroll={listenScrollHandler}
          ></SixthSection>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default About;
