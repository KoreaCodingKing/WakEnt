import { useCallback, useEffect, useRef, useState } from 'react';
import { IsedolMemberID } from '../../../structs/member';

/**
 * `target` 에서 `selector` 에 해당하는 요소를 찾아서 Intersect될 경우 `onIntersect` 에 Intersect된 요소의 멤버 이름을 담아 함수를 실행합니다.
 * @param target
 * @param selector
 * @param active
 * @param onIntersect
 */
export const useIntersectionObserver = (
  target: React.RefObject<HTMLDivElement>,
  selector: string,
  active: boolean,
  contents: boolean,
  onIntersect?: (id: IsedolMemberID | null, elem?: HTMLElement) => void
): void => {
  const [observer, setObserver] = useState<IntersectionObserver>(null!);

  useEffect(() => {
    if (!process.browser) {
      return;
    }

    const localObserver = new IntersectionObserver(
      entries => {
        if (!active) {
          return;
        }

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            onIntersect &&
              onIntersect(
                (entry.target as HTMLElement).dataset.member as IsedolMemberID,
                entry.target as HTMLElement
              );
          }
        });
      },
      {
        root: target.current,
        threshold: (contents) ? 0.2 : 0.8,
      }
    );

    setObserver(localObserver);

    return () => {
      localObserver.disconnect();
    };
  }, [active, onIntersect, target, contents]);

  useEffect(() => {
    if (!active) {
      onIntersect && onIntersect(null);

      return;
    }

    if (!observer) return;

    const childTargets = target.current!.querySelectorAll(selector);
    childTargets.forEach(child => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [active, observer, onIntersect, target, selector]);
};

/**
 * (IsedolMembers 전용 Hook) 카드의 Rect 값을 구하기 위해 사용되는 Hook입니다.
 * @param ref Ref
 * @param query Query Selector
 * @returns Rect 값
 */
export const useRect = (
  ref: React.RefObject<HTMLDivElement>,
  query: string
) => {
  const [rect, setRect] = useState<[DOMRect | undefined, DOMRect | undefined]>([
    undefined,
    undefined,
  ]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const handler = () => {
      const r = ref.current!.querySelector(query);

      setRect([
        ref.current!.getBoundingClientRect(),
        r?.getBoundingClientRect(),
      ]);
    };

    requestAnimationFrame(() => {
      handler();
    });

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [ref, query]);

  return rect;
};

/**
 * Debounce를 구현하는 Debouncer입니다.
 * @param func 실행할 함수
 * @param delay 지연시간
 * @returns [Debounce가 적용된 함수, Debounce를 취소하는 함수]
 */
export const useDebouncer = <T extends (...args: any[]) => unknown>(
  func: T,
  delay: number
): [(...args: Parameters<T>) => void, () => void] => {
  const timeout = useRef<number>(0);

  const cancel = useCallback(() => {
    clearTimeout(timeout.current);
  }, []);

  const run = useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current) {
        cancel();
      }

      timeout.current = (setTimeout(() => {
        func(...args);
      }, delay) as unknown) as number;
    },
    [delay, cancel, func]
  );

  return [run, cancel];
};
