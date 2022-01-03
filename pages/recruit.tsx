import { NextPage } from 'next';

import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import parentStyles from '../styles/pages/index.module.scss';
import styles from '../styles/components/wakenter/WakEnterRecruit.module.scss';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useDynamicPageScroll } from '../components/common/Scroll';
import Image from 'next/image';
import WakEnterMetadata from '../components/wakenter/Meta';
import { concatClass } from '../utils/class';
import Footer from '../components/wakenter/WakEnterFooter';

interface SectionProps {
  index: number
  children?: ReactNode
  full?: boolean
}

const Section = ({ index, children, full }: SectionProps) => {
  return (
    <section
      className={concatClass(styles.section, full && styles.full)}
      data-index={index}
    >
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

const AlzaltakText = () => {
  return (
    <div className={styles.alzaltak}>
      <video autoPlay playsInline muted loop>
        <source src='/videos/blur.webm' />
      </video>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 285 80'
        preserveAspectRatio='xMidYMid slice'
      >
        <defs>
          <mask id='alzaltak-mask' x='0' y='0' width='100%' height='100%'>
            <rect x='0' y='0' width='100%' height='100%' />
            <text x='30%' y='55%' textAnchor='start'>
              알잘딱.
            </text>
          </mask>
        </defs>
        <rect x='0' y='0' width='100%' height='100%' />
      </svg>
      <div className={styles.notSupport}>
        <h1>알잘딱.</h1>
      </div>
    </div>
  );
};

const PositionCategory = [
  'Legal',
  'Business',
  'Engineering',
  'Design',
  'Compliance',
  'Assets',
] as const;

type CategoryKeys = typeof PositionCategory[number]
interface Position {
  title: string
  category: CategoryKeys
}

const Positions: Position[] = [
  {
    title: 'Alzartak Manager',
    category: 'Business',
  },
  {
    title: 'Mixing Engineer',
    category: 'Engineering',
  },
  {
    title: 'Human Resource Manager',
    category: 'Business',
  },
  {
    title: 'Legal Counsel',
    category: 'Legal',
  },
  {
    title: 'Asset Manager',
    category: 'Assets',
  },
  {
    title: 'Brand Value Designer',
    category: 'Design',
  },
];

const useIsSafari = () => {
  const [safari, setSafari] = useState<boolean>(false);

  useEffect(() => {
    if (!process.browser) {
      return;
    }

    setSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return safari;
};

const About: NextPage = () => {
  const page = useDynamicPageScroll(null, `.${styles.section}`, 0.05);

  const [positionCategory, setPositionCategory] = useState<CategoryKeys | null>(
    null
  );

  const isSafari = useIsSafari();

  return (
    <>
      <WakEnterMetadata title='채용'></WakEnterMetadata>
      <div className={parentStyles.main}>
        <header className={parentStyles.whiteBackground}>
          <WakEnterHeader white={page === 0}></WakEnterHeader>
        </header>
        <div>
          <div className={styles.container}>
            <Section index={0} full>
              <div className={styles.background}>
                <div
                  className={concatClass(
                    styles.backgroundParallax,
                    isSafari && styles.safari
                  )}
                ></div>
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
            <Section index={1} full>
              <div className={styles.contents}>
                <h1 className={styles.sectionTitle}>복리후생</h1>
                <div className={styles.grid}>
                  {Welfares.map((v, wi) => (
                    <div key={`welfare-column-${wi}`} className={styles.column}>
                      {v.map(card => (
                        <div
                          key={`welfare-card-${card.title}`}
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
                          <span className={styles.title}>{card.title}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className={styles.mute}>
                    <p>
                      * 입사 시점의 “송도사는 30대 웰시코기 견주가 운영하는
                      메타버스 버츄얼 엔터테인먼트" 업계 최고 임금을 보장합니다.
                    </p>
                    <p>
                      ** 국내 주식 중 상장 폐지를 앞둔 주식과 1000원 이하의 주식
                      1주를 무작위로 선정하여 드립니다.
                    </p>
                    <p>
                      *** 법인 카드를 사용할 수 있는 부분은 다음과 같습니다: 책
                      구매 (뇌절하지 않는 대화법)
                    </p>
                  </div>
                </div>
              </div>
            </Section>
            <Section index={2}>
              <div className={styles.contents}>
                <h1 className={styles.sectionTitle}>인재상</h1>
                <AlzaltakText></AlzaltakText>
              </div>
            </Section>
            <Section index={3}>
              <div className={styles.contents}>
                <h1 className={styles.sectionTitle}>채용 분야</h1>
                <div className={styles.buttonGroup}>
                  <button
                    className={
                      positionCategory === null ? styles.active : undefined
                    }
                    onClick={() => setPositionCategory(null)}
                  >
                    전체
                  </button>
                  {PositionCategory.map(v => (
                    <button
                      className={
                        positionCategory === v ? styles.active : undefined
                      }
                      onClick={() => setPositionCategory(v)}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <div className={styles.positions}>
                  {Positions.map(
                    v =>
                      (positionCategory === null ||
                        positionCategory === v.category) && (
                        <div className={styles.position}>
                          <p>{v.title}</p>
                          <p>{v.category}</p>
                        </div>
                      )
                  )}
                  {positionCategory === null ||
                    (!Positions.filter(v => v.category === positionCategory)
                      .length && (
                      <div className={styles.position}>
                        <p>해당 포지션은 모집하고 있지 않습니다.</p>
                      </div>
                    ))}
                </div>
                <div className={styles.alert}>
                  <p>
                    WAK Entertainment는 오프라인 접수를 항상 기다리고 있습니다.
                  </p>
                  <p>
                    오프라인 접수: 인천광역시 송도 왁엔터로 1-1 1층 안내데스크
                  </p>
                </div>
              </div>
            </Section>
            <Section index={4}>
              <Footer></Footer>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
