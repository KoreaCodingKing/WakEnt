import { scrollHandler } from "../../../pages/about";
import { concatClass } from "../../../utils/class";

interface FourthSectionProps {
  className: string,
  current: boolean,
  onScroll: (index: number, callback: scrollHandler) => void
}

const FourthSection = ({ className, onScroll }: FourthSectionProps) => {
  return (
    <section className={concatClass(className)} data-index={3}>

    </section>
  )
}

export default FourthSection;