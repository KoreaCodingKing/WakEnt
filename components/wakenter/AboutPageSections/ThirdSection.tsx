import { scrollHandler } from '../../../pages/about';
import styles from '../../../styles/components/wakenter/AboutPageSections/ThirdSection.module.scss';
import { concatClass } from '../../../utils/class';

interface ThirdSectionProps {
  className: string,
  current: boolean,
  onScroll: (index: number, callback: scrollHandler) => void
}

const ThirdSection = ({ className, onScroll }: ThirdSectionProps) => {
  return (
    <section className={concatClass(className)} data-index={2}>
      <div className={styles.section_container}>
        <div className={styles.contents_wrapper}>
          <p>이 세상 어디에도 없는<br></br>신개념 엔터테인먼트</p>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;