import { useEffect, useState } from "react";
import Image from "next/image";
import { AboutSectionProps } from "../../../pages/about";
import { classes } from "../../../utils/class";
import styles from "../../../styles/components/wakenter/AboutPageSections/FifthSection.module.scss";
import Typer from "../../common/Typer";

const FifthSection = ({className, onScroll}: AboutSectionProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    onScroll(4, (top, height) => {
      setScrollProgress(top / (height / 4));
    });
  }, [onScroll]);

  return (
    <section className={classes(className, styles.fifth_section)}>
      <div className={styles.section_container}>
        <div className={styles.contents_wrapper}>
          <div className={styles.image_wrapper}>
            <Image src={'/images/member/wakgood.png'} alt="우왁굳 대표 정장사진" layout="fill"></Image>
          </div>
          <div className={styles.motto_container}>
            <p className={styles.motto_top_quote}>&quot;</p>
            <Typer progress={scrollProgress} className={styles.motto}>사실 난 메타버스가 뭔지 잘 모른다.</Typer>
            <p className={styles.motto_bottom_quote}>&quot;</p>
            <p className={styles.motto_desc}>- 왁엔터테인먼트 대표 우왁굳, 왁타버스에 대한 자신감을 내보이며</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;