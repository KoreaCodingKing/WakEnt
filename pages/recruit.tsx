import { NextPage } from 'next';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import parentStyles from '../styles/pages/index.module.scss';
import styles from '../styles/components/wakenter/WakEnterRecruit.module.scss';
import { ReactNode, useRef } from 'react';
import { useDynamicPageScroll } from '../components/common/Scroll';
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

interface WelfareType {
  title: string
  image?: string
  color?: string
}

const Welfares: WelfareType[][] = [
  [
    {
      title: '무제한 휴가 사용',
      image: '/images/building/meeting_room.png',
    },
    {
      title: '언제든지 해외 연수 기회 제공',
      image: '/images/building/recording_room.png',
    },
    {
      title: '동종 업계 최고 연봉*',
      image: '/images/building/office_room.png',
    },
  ],
  [
    {
      title: '스톡 지급**',
      color: '#4845F3',
    },
    {
      title: '무제한 간식, 식대 제공',
      image: '/images/building/pantry_room.png',
    },
    {
      title: '개인 법인카드 지급***',
      color: '#EF5959',
    },
  ],
  [
    {
      title: '분기별 성과금',
      image: '/images/money.jpg',
    },
    {
      title: '각종 휴식 시설',
      color: '#257228',
    },
    {
      title: '최고급 장비 무제한 지급',
      image: '/images/building/practice_room.png',
    },
  ],
];

interface CardCSS extends React.CSSProperties {
  '--color': string
}

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
                  <h2 className={styles.title}>
                    세계 최고의 엔터테이먼트를 위해.
                  </h2>
                  <div className={styles.joojeori}>
                    <div className={styles.moongtengee}>
                      <p>누군가의 삶에 의미를 부여해주는 경험,</p>
                      <p>누군가의 일상에 생기를 불어 넣는 경험,</p>
                      <p>누군가에게 새로운 추억을 남겨주는 경험,</p>
                    </div>
                    <div className={styles.moongtengee}>
                      <p>모두 이뤄보신 적이 있으신가요?</p>
                      <p>
                        이러한 경험을 체험할 수 있는 일을 하고 싶지 않으신가요?
                      </p>
                    </div>
                    <div className={styles.moongtengee}>
                      <p>WAK Entertainment는 오직 조회수, 단 한 목표를 위해</p>
                      <p>
                        실력과 열정 있는 멤버들이 모여 꿈을 이뤄나가는
                        회사입니다.{' '}
                      </p>
                    </div>
                    <div className={styles.moongtengee}>
                      <p>WAK Entertainment에서는 당신의 합류를 기다립니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            <Section index={1}>
              <div className={styles.contents}>
                <h1 className={styles.sectionTitle}>복리후생</h1>
                <div className={styles.grid}>
                  {Welfares.map(v => (
                    <div className={styles.column}>
                      {v.map(card => (
                        <div
                          className={styles.card}
                          style={
                            {
                              '--color': card.color,
                            } as CardCSS
                          }
                        >
                          {card.image && (
                            <div className={styles.cardBackground}>
                              <Image src={card.image} layout='fill'></Image>
                            </div>
                          )}
                          <span className={styles.title}>
                            {card.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className={styles.mute}>
                    <p>* 입사 시점의 “송도사는 30대 웰시코기 견주가 운영하는 메타버스 버츄얼 엔터테인먼트" 업계 최고 임금을 보장합니다.</p>
                    <p>** 국내 주식 중 상장 폐지를 앞둔 주식과 1000원 이하의 주식 1주를 무작위로 선정하여 드립니다.</p>
                    <p>*** 법인 카드를 사용할 수 있는 부분은 다음과 같습니다: 책 구매 (뇌절하지 않는 대화법)</p>
                  </div>
                </div>
              </div>
            </Section>
            <Section index={2}></Section>
            <Section index={3}></Section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
