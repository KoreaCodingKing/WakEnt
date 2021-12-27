import { RefObject, useEffect, useState } from 'react';

/**
 * Native 스크롤을 활용한 페이지 전환 감지 함수입니다.
 * @param parent
 * @param pageHeight
 * @param threshold
 * @returns
 */
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

export const useHorizonalPageScroller = (
  parent: RefObject<HTMLElement>,
  threshold: number,
  pages: HTMLElement[]
): [boolean, number] => {
  if (!process.browser) {
    return [false, 0];
  }

  const query = `screen and (max-width: ${threshold}px)`;
  const [active, setActive] = useState<boolean>(
    !threshold || window.matchMedia(query).matches
  );

  const [page, setPage] = useState<number>(0);

  /**
   * 화면 가로 크기가 threshold를 넘었을 경우 active 처리
   */
  useEffect(() => {
    if (!threshold) {
      return;
    }

    const matches = window.matchMedia(query);

    const resizeHandler = (ev: MediaQueryListEvent) =>
      ev.matches !== active && setActive(ev.matches);

    matches.addEventListener('change', resizeHandler);

    return () => {
      matches.removeEventListener('change', resizeHandler);
    };
  }, [threshold]);

  useEffect(() => {
    if (!active) {
      return;
    }

    if (!pages[page]) {
      return;
    }

    pages[page].scrollIntoView({
      block: 'nearest',
      behavior: 'smooth'
    });
  }, [active, page, pages]);

  useEffect(() => {
    const nonActiveHandler = (event: WheelEvent) => {
      if (!parent.current) {
        return;
      }

      parent.current.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    };

    let timeout = 0;

    const activeHandler = (event: WheelEvent) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      /**
       * TODO : Should fix with better threshold handler.
       */
      timeout = setTimeout(() => {
        setPage(
          Math.max(
            0,
            Math.min(pages.length, event.deltaX > 0 ? page + 1 : page - 1)
          )
        );
      }, 300) as unknown as number;
    };

    const wheelEventHandler = (event: WheelEvent) => {
      event.preventDefault();

      active ? activeHandler(event) : nonActiveHandler(event);
    };

    if (!parent.current) {
      return;
    }

    parent.current.addEventListener('wheel', wheelEventHandler);
    return () => {
      clearTimeout(timeout);

      if (parent.current) {
        parent.current.removeEventListener('wheel', () => wheelEventHandler);
      }
    };
  }, [active, parent.current, page, pages]);

  return [active, page];
};
