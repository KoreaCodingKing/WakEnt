import styles from '../../styles/components/common/PageIndicator.module.scss';
import { classes } from '../../utils/class';

interface PageIndicatorProps {
  page: number
  pageCount: number
  setPage: (to: number) => void
  slide?: number
  paused?: boolean
}

export const PageIndicator = ({
  page,
  pageCount,
  setPage,
  slide,
  paused,
}: PageIndicatorProps) => {
  return (
    <div className={styles.pageIndicator}>
      {new Array(pageCount).fill(null).map((_, i) => (
        <button
          key={`page-indicator-${i}`}
          data-current={page === i}
          onClick={() => setPage && setPage(i)}
        >
          <span
            className={classes(
              !slide || !paused ? styles.active : styles.paused,
              typeof slide === 'number' && styles.animation
            )}
            style={{ animationPlayState: paused ? 'paused' : 'running',
              animationDuration: `${slide}ms` }}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default PageIndicator;
