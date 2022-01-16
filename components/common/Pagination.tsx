import styles from '../../styles/components/common/Pagination.module.scss';

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
  return (
    <div className={styles.pagination}>
      {previous && (
        <span
          className={styles.page}
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
          className={styles.page}
          onClick={() => movePage && movePage(pages[pages.length - 1] + 1)}
        >
          다음
        </span>
      )}
    </div>
  );
};

export default Pagination;
