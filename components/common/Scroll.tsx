import { RefObject, useEffect, useState } from 'react';

import styles from '../../styles/components/common/Scroll.module.scss';
import { clamp } from '../../utils/number';

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
  }, [page, parent, pageHeight, threshold]);

  return page;
};

interface DynamicScrollOption {
  offset?: number
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
  options: DynamicScrollOption = {
    offset: 0,
    debounce: 0
  }
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

    const offset = options.offset || 0;

    const processScroll = (renderAll?: boolean) => {
      const top = target.scrollTop || window.scrollY;

      const scrolls: [boolean, number, number][] = new Array(
        childs.length
      ).fill([false, 0, 0]);

      let finalPage = page;

      for (let i = 0; i < childs.length; i++) {
        const ot = childs[i].offsetTop;
        const sh = childs[i].scrollHeight;

        scrolls[i] = [top < ot + sh - offset, clamp(top - ot - offset, 0, sh), sh];
      }

      for (let i = 0; i < childs.length - 1; i++) {
        if (
          childs[i + 1]
            ? top - offset < childs[i + 1].offsetTop - (target.scrollHeight * threshold)
            : top - childs[i].offsetTop - (target.scrollHeight * threshold) - offset > 0
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
  }, [page, parent, pageSelector, options.offset, options.callback, options.debounce, threshold]);

  return page;
};

export const useHorizonalPageScroller = (
  parent: RefObject<HTMLElement>,
  threshold: number,
  pages: HTMLElement[],
  activeOn?: () => boolean
): [boolean, number] => {
  const query = `screen and (max-width: ${threshold}px)`;
  const [active, setActive] = useState<boolean>(
    !threshold || process.browser ? window.matchMedia(query).matches : false
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
  }, [threshold, active, query]);

  useEffect(() => {
    const target = parent.current;

    if (!target) {
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
        target.scrollBy({
          left: event.deltaX,
        });
      } else if (event.deltaY && Math.abs(event.deltaY) > 1) {
        target.scrollBy({
          left: event.deltaY,
        });
      }
    };

    getCurrentPage();

    const scrollHandler = () => requestAnimationFrame(getCurrentPage);

    target.addEventListener('scroll', scrollHandler);
    target.addEventListener('wheel', wheelEventHandler);

    return () => {
      if (!target) {
        return;
      }

      target.removeEventListener('scroll', scrollHandler);
      target.removeEventListener('wheel', wheelEventHandler);
    };
  }, [active, page, pages, parent, activeOn]);

  return [active, page];
};
