import { RefObject, useEffect, useState } from 'react';

export const useScrollPage = (
  parent: RefObject<HTMLElement>,
  pageHeight: number,
  threshold: number
) => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (!parent.current) {
      return;
    }

    const target = parent.current;

    const wheelHandler = () => {
      const currentPage = Math.floor(
        (target.scrollTop + pageHeight * threshold) / pageHeight
      );

      if (page !== currentPage) {
        setPage(currentPage);
      }
    };

    target.addEventListener('wheel', wheelHandler);
    target.addEventListener('scroll', wheelHandler);

    wheelHandler();

    return () => {
      target.removeEventListener('wheel', wheelHandler);
      target.removeEventListener('scroll', wheelHandler);
    };
  }, [parent.current, page]);

  return page;
};
