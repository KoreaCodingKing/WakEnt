import styles from '../../styles/components/common/PageIndicator.module.scss';
import { concatClass } from '../../utils/class';

interface PageIndicatorProps {
  page: number
  pageCount: number
  setPage: (to: number) => void
  slide?: number
  playSlide?: boolean
}

export const PageIndicator = ({
  page,
  pageCount,
  setPage,
  slide,
  playSlide,
}: PageIndicatorProps) => {
  return (
    <div className={styles.page_indicator}>
      {new Array(pageCount).fill(null).map((_, i) => (
        <button
          key={`page-indicator-${i}`}
          data-current={page === i}
          onClick={() => setPage && setPage(i)}
        >
          <span
            className={concatClass(
              !slide || playSlide ? styles.active : styles.paused,
              typeof slide === 'number' && styles.animation
            )}
            style={{ animationPlayState: playSlide ? 'initial' : 'paused',
              animationDuration: `${slide}ms` }}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default PageIndicator;
