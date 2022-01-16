import { useRef } from 'react';
import styles from '../../styles/components/common/Pagination.module.scss';
import { concatClass } from '../../utils/class';
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
  const paginationRef = useRef<HTMLDivElement>(null);
  const paginationChildRef: HTMLElement[] = [];

  useHorizonalPageScroller(paginationRef, 690, paginationChildRef);

  return (
    <div className={styles.pagination_container} ref={paginationRef}>
      <div className={styles.pagination}
        ref={(element: HTMLDivElement) => {
          element && paginationChildRef.push(element);
        }}>
        {previous && (
          <span
            className={concatClass(styles.page, styles.next_prev_btn)}
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
            className={concatClass(styles.page, styles.next_prev_btn)}
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
