import { AboutSectionProps } from "../../../pages/about";
import { concatClass } from "../../../utils/class";
import styles from "../../../styles/components/wakenter/AboutPageSections/FifthSection.module.scss";

const FifthSection = ({className, onScroll}: AboutSectionProps) => {
  return (
    <section className={concatClass(className)}>
      <div className={styles.section_container}>
        <div className={styles.contents_wrapper}>

        </div>
      </div>
    </section>
  )
}

export default FifthSection;