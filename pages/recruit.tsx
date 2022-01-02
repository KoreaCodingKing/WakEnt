import { NextPage } from 'next';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import parentStyles from '../styles/pages/index.module.scss';
import styles from '../styles/components/wakenter/WakEnterRecruit.module.scss';
import { ReactNode, useRef } from 'react';
import {
  useDynamicPageScroll,
} from '../components/common/Scroll';
import Image from 'next/image';
import WakEnterMetadata from '../components/wakenter/Meta';
import Centerize from '../components/common/Centerize';

interface SectionProps {
  index: number
  children?: ReactNode
}

const Section = ({ index, children }: SectionProps) => {
  return (
    <section className={styles.section} data-index={index}>
      {children}
    </section>
  );
};

const About: NextPage = () => {
  const container = useRef<HTMLDivElement>(null);
  const page = useDynamicPageScroll(container, `.${styles.section}`, 0.05);

  return (
    <>
      <WakEnterMetadata title='채용'></WakEnterMetadata>
      <div className={parentStyles.main}>
        <header>
          <WakEnterHeader white={page === 0}></WakEnterHeader>
        </header>
        <div className={parentStyles.pages}>
          <div className={styles.container} ref={container}>
            <Section index={0}>
              <div className={styles.background}>
                <Centerize>
                  <div className={styles.image_wrapper}>
                    <Image
                      src='/images/building/bg_studio_mixer.png'
                      layout='fill'
                      placeholder='blur'
                      blurDataURL='/images/building/bg_studio_mixer.png'
                      alt='왁엔터 사옥'
                    ></Image>
                  </div>
                </Centerize>
              </div>
              <div className={styles.contents}>
                <div className={styles.center}>
                  <h2 className={styles.title}>세계 최고의 엔터테이먼트를 위해.</h2>
                  <div className={styles.joojeori}>
                    <div className={styles.moongtengee}>
                      <p>누군가의 삶에 의미를 부여해주는 경험,</p>
                      <p>누군가의 일상에 생기를 불어 넣는 경험,</p>
                      <p>누군가에게 새로운 추억을 남겨주는 경험,</p>
                    </div>
                    <div className={styles.moongtengee}>
                      <p>모두 이뤄보신 적이 있으신가요?</p>
                      <p>이러한 경험을 체험할 수 있는 일을 하고 싶지 않으신가요?</p>
                    </div>
                    <div className={styles.moongtengee}>
                      <p>WAK Entertainment는 오직 조회수, 단 한 목표를 위해</p>
                      <p>실력과 열정 있는 멤버들이 모여 꿈을 이뤄나가는 회사입니다. </p>
                    </div>
                    <div className={styles.moongtengee}>
                      <p>WAK Entertainment에서는 당신의 합류를 기다립니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            <Section index={1}></Section>
            <Section index={2}></Section>
            <Section index={3}></Section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
