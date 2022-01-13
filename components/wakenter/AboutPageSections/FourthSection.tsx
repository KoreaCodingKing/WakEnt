import { scrollHandler } from "../../../pages/about";
import { concatClass } from "../../../utils/class";
import styles from '../../../styles/components/wakenter/AboutPageSections/FourthSection.module.scss';

interface FourthSectionProps {
  className: string,
  current: boolean,
  onScroll: (index: number, callback: scrollHandler) => void
}

const FourthSection = ({ className, onScroll }: FourthSectionProps) => {
  return (
    <section className={concatClass(className)} data-index={3}>
      <div className={styles.section_container}>
        <div className={styles.contents_wrapper}>
          <div className={styles.infra_introduce}></div>
          <div className={styles.crew_container}></div>
        </div>
      </div>
    </section>
  )
}

export default FourthSection;