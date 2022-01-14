import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Typed, { TypedOptions } from 'typed.js';
import { AboutSectionProps } from "../../../pages/about";
import { concatClass } from "../../../utils/class";
import styles from "../../../styles/components/wakenter/AboutPageSections/FifthSection.module.scss";

const FifthSection = ({className, current, onScroll}: AboutSectionProps) => {
  const typedRef = useRef<HTMLParagraphElement>(null);
  const [showTyped, setShowTyped] = useState(false);

  useEffect(() => {
    if (!typedRef || !typedRef.current) {
      return;
    }

    const typeEl = typedRef.current;
    let typed: Typed;
    let options: TypedOptions;
    onScroll(4, (top) => {
      // ToDo: state가 변환되지 않음. 확인 필요
      if (top === 0 && !showTyped) {
        console.log('2', showTyped);
        options = {
          strings: [
            '사실 난 메타버스가 뭔지 잘 모른다.'
          ],
          typeSpeed: 60,
          showCursor: false,
          onComplete: () => {
            console.log('?');
            setShowTyped(true);
          }
        } as TypedOptions;
        typed = new Typed(typeEl, options);
      }
      setShowTyped(top > 0 || top === 0);

    });


    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={concatClass(className, styles.fifth_section)}>
      <div className={styles.section_container}>
        <div className={styles.contents_wrapper}>
          <div className={styles.image_wrapper}>
            <Image src={'/images/member/wakgood.png'} alt="우왁굳 대표 정장사진" layout="fill"></Image>
          </div>
          <div className={styles.motto_container}>
            <p className={styles.motto_top_quote}>"</p>
            <p className={styles.motto} ref={typedRef} />
            <p className={styles.motto_bottom_quote}>"</p>
            <p className={styles.motto_desc}>- 왁엔터테인먼트 대표 우왁굳, 왁타버스에 대한 자신감을 내보이며</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;