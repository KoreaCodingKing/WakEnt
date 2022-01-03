import { RefObject, useEffect, useState } from 'react';

/**
 * Native 스크롤을 활용한 페이지 전환 감지 함수입니다. 각 페이지 사이즈가 고정되어 있을 때 사용합니다.
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

/**
 * Native 스크롤을 활용한 페이지 전환 감지 함수입니다. 각 페이지 사이즈가 유동적일때 사용합니다.
 * @param parent 스크롤을 감시할 요소입니다. null 값이 지정되는 경우 자동으로 body의 스크롤을 감지합니다.
 * @param pageSelector
 * @param threshold
 * @returns
 */
export const useDynamicPageScroll = (
  parent: HTMLElement | null,
  pageSelector: string,
  threshold: number,
  scroll?: (page: number, top: number, height: number) => void
) => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const target = parent ?? document.body;

    const childs = target.querySelectorAll(pageSelector) as NodeListOf<
      HTMLElement
    >;

    const wheelHandler = () => {
      for (let i = 0; i < childs.length; i++) {
        const nextChild = childs[i + 1];

        /**
         * FIXME : .offsetHeight 메소드는 margin을 계산하지 않으니 margin까지 계산이 필요한 경우 그 때 따로 구현하기
         */
        if (
          nextChild &&
          (target.scrollTop || window.scrollY) <
            nextChild.offsetTop - target.offsetHeight * threshold
        ) {
          if (scroll) {
            scroll(
              i,
              nextChild.offsetTop - (target.scrollTop || window.scrollY),
              target.offsetHeight
            );
          }

          if (i !== page) {
            setPage(i);
          }

          return;
        }
      }
    };

    const evTarget = parent === null ? window : target;

    wheelHandler();

    evTarget.addEventListener('wheel', wheelHandler);
    evTarget.addEventListener('scroll', wheelHandler);

    return () => {
      evTarget.removeEventListener('wheel', wheelHandler);
      evTarget.removeEventListener('scroll', wheelHandler);
    };
  }, [parent, page]);

  return page;
};

export const useHorizonalPageScroller = (
  parent: RefObject<HTMLElement>,
  threshold: number,
  pages: HTMLElement[],
  activeOn?: () => boolean
): [boolean, number] => {
  if (!process.browser) {
    return [false, 0];
  }

  const query = `screen and (max-width: ${threshold}px)`;
  const [active, setActive] = useState<boolean>(
    !threshold || window.matchMedia(query).matches
  );

  const [page, setPage] = useState<number>(-1);

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
  }, [threshold, active]);

  useEffect(() => {
    if (!parent.current) {
      return;
    }

    const getCurrentPage = () => {
      const indexes: number[] = [];

      pages.forEach((elem, index) => {
        const { width, left } = elem.getBoundingClientRect();

        const condition =
          left + width / 3 > 0 && left + width / 1.5 <= window.innerWidth;

        if (condition) {
          indexes.push(index);
        }
      });

      if (indexes.length) {
        setPage(indexes[indexes.length - 1]);
      }
    };

    const wheelEventHandler = (event: WheelEvent) => {
      if (!parent.current) {
        return;
      }

      if (activeOn && !activeOn()) {
        return;
      }

      event.preventDefault();

      if (event.deltaX) {
        parent.current.scrollBy({
          left: event.deltaX,
        });
      } else if (event.deltaY && Math.abs(event.deltaY) > 1) {
        parent.current.scrollBy({
          left: event.deltaY,
        });
      }
    };

    getCurrentPage();

    const scrollHandler = () => requestAnimationFrame(getCurrentPage);

    parent.current.addEventListener('scroll', scrollHandler);
    parent.current.addEventListener('wheel', wheelEventHandler);
    return () => {
      if (!parent.current) {
        return;
      }

      parent.current.removeEventListener('scroll', scrollHandler);
      parent.current.removeEventListener('wheel', wheelEventHandler);
    };
  }, [active, parent.current, page, pages]);

  return [active, page];
};
