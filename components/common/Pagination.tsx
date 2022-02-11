import { useRef } from 'react';
import styles from '../../styles/components/common/Pagination.module.scss';
import { classes } from '../../utils/class';
import { useHorizonalPageScroller } from './Scroll';

interface PaginationProps {
  current: number
  pages: number[]
  previous?: boolean
  next?: boolean
  movePage?: (to: number) => void
}

export const Pagination = ({
  current,
  pages,
  previous,
  next,
  movePage,
}: PaginationProps) => {
  const wrapper = useRef<HTMLDivElement>(null);

  useHorizonalPageScroller(
    wrapper,
    690,
    Array.prototype.slice.call(document.querySelectorAll(styles.pagination))
  );

  return (
    <div className={styles.wrapper} ref={wrapper}>
      <div className={styles.pagination}>
        {previous && (
          <span
            className={classes(styles.page, styles.next_prev_btn)}
            onClick={() => movePage && movePage(pages[0] - 1)}
          >
            이전
          </span>
        )}
        {pages.map(page => (
          <span
            key={`pagination-${page}`}
            className={styles.page}
            data-active={current === page}
            onClick={() => movePage && movePage(page)}
          >
            {page}
          </span>
        ))}
        {next && (
          <span
            className={classes(styles.page, styles.next_prev_btn)}
            onClick={() => movePage && movePage(pages[pages.length - 1] + 1)}
          >
            다음
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
