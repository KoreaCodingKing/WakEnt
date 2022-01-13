import { RefObject, useEffect, useState } from 'react';

import styles from '../../styles/components/common/Scroll.module.scss';

/**
 * body 스크롤을 잠금할 때 사용하는 Hook입니다.
 *
 * @param lock Body Scroll을 비활성화 할 지에 대한 여부
 */
export const useBodyLock = (lock: boolean) => {
  useEffect(() => {
    document.body.classList[lock ? 'add' : 'remove'](styles.bodyScrollLock);

    return () => {
      document.body.classList.remove(styles.bodyScrollLock);
    };
  }, [lock]);
};

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

interface DynamicScrollOption {
  debounce?: number
  callback?: (pages: [boolean, number, number][], renderAll?: boolean) => void
}

/**
 * Native 스크롤을 활용한 페이지 전환 감지 함수입니다. 각 페이지 사이즈가 유동적일때 사용합니다.
 * @param parent 스크롤을 감시할 요소입니다. null 값이 지정되는 경우 자동으로 body의 스크롤을 감지합니다.
 * @param pageSelector
 * @param threshold
 * @returns
 */
export const useDynamicPageScroll = (
  parent: RefObject<HTMLElement> | null,
  pageSelector: string,
  threshold: number,
  options?: DynamicScrollOption
) => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const target = parent?.current ?? document.body;

    if (!target) {
      return;
    }

    const childs = target.querySelectorAll(pageSelector) as NodeListOf<
      HTMLElement
    >;

    const processScroll = (renderAll?: boolean) => {
      const top = target.scrollTop || window.scrollY;

      const scrolls: [boolean, number, number][] = new Array(
        childs.length
      ).fill([false, 0, 0]);

      let finalPage = page;

      for (let i = 0; i < childs.length; i++) {
        const nextChild = childs[i + 1];

        scrolls[i] = [
          top < childs[i].offsetTop + childs[i].scrollHeight,
          top - childs[i].offsetTop,
          childs[i].scrollHeight,
        ];

        if (
          nextChild
            ? top < nextChild.offsetTop - target.scrollHeight * threshold
            : top - childs[i].offsetTop - target.scrollHeight * threshold > 0
        ) {
          finalPage = i;

          break;
        }
      }

      if (finalPage !== page) {
        setPage(finalPage);
      }

      if (options?.callback && scrolls.length) {
        options.callback!(scrolls, renderAll);
      }
    };

    let bounce = 0;

    const wheelHandler = () => {
      if (options?.debounce) {
        if (bounce) {
          clearTimeout(bounce);
        }

        bounce = (setTimeout(
          processScroll,
          options.debounce
        ) as unknown) as number;

        return;
      }

      processScroll();
    };

    const fullHandler = () => processScroll(true);

    const evTarget = parent === null ? window : target;

    evTarget.addEventListener('wheel', wheelHandler, { passive: true });
    window.addEventListener('scroll', wheelHandler, { passive: true });
    window.addEventListener('resize', fullHandler, { passive: true });

    requestAnimationFrame(() => processScroll(true));

    return () => {
      if (bounce) {
        clearTimeout(bounce);
      }

      evTarget.removeEventListener('wheel', wheelHandler);
      window.removeEventListener('scroll', wheelHandler);
      window.removeEventListener('resize', fullHandler);
    };
  }, [parent?.current, page]);

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
