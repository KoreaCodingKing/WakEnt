import Image from 'next/image';

import styles from '../../styles/components/wakenter/WakEnterAbout.module.scss';

export const WakEnterAbout = () => {
  return (
    <div className={styles.about_container}>
      <section className={styles.first_section}>
        <div className={styles.first_section__img}>
          <Image src={'/images/building/bg_introduce_main_img.png'}
            layout='fill'
            placeholder='blur'
            blurDataURL={'/images/building/bg_introduce_main_img.png'}
            alt='왁엔터 사옥'
          ></Image>
        </div>
        <div className={styles.first_section__introduce}>
          <h2 className={styles.introduce_title}>Who are we?</h2>
          <p className={styles.introduce_subtitle}>WAK Entertainment는 인천 송도 왁엔터로에 위치한 엔터테이먼트 회사로, 2021년 8월에 설립되어 현재까지 다양한 컨텐츠로 보는 이들을 하여금 즐거움을 선사하고 있습니다.</p>
        </div>
      </section>
      <section className={styles.second_section}></section>
      <section className={styles.third_section}></section>
      <section className={styles.fourth_section}></section>
    </div>
  );
};

export default WakEnterAbout;