import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

/**
 * URL을 기반으로 상태를 업데이트하는 Hook입니다. React.useState와 같은 기능을 가지고 있습니다.
 *
 * ```
 * const [state, setState] = useState('test');
 *
 * useEffect(() => {
 *  setState('test2');
 * }, []);
 * ```
 *
 * @param initialState 초기 상태 값. URL에 이미 값이 있으면 이 값을 덮어 씁니다.
 * @param onPopState 브라우저에 의해 해쉬 값이 변경되면 발생할 이벤트 핸들러. (popState)
 * 사용자가 Hash 값을 변경할 가능성이 있으므로 state가 주어진 타입 값이라는 것을 보증할 수 없습니다.
 * 확실한 값이 필요한 경우 값을 받은 후에 해당 값을 검증하는 방식으로 사용하세요.
 * @returns
 */
export const useHashState = <S extends string | null>(
  initialState: S | (() => S),
  onPopState?: (hash: string) => void,
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initialState);

  useEffect(() => {
    if (location.hash) {
      setState(location.hash.replace(/\#/, '') as S);
    }

    const hashChangeHandler = () =>
      setState(
        (location.hash === '' ? null : location.hash.replace(/\#/, '')) as S
      );

    window.addEventListener('hashchange', hashChangeHandler);

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  useEffect(() => {
    if (!onPopState) {
      return;
    }

    const popStateHandler = (_ev: PopStateEvent) => {
      onPopState(location.hash.replace(/\#/, '') as string);
    };

    window.addEventListener('popstate', popStateHandler);

    return () => {
      window.removeEventListener('popstate', popStateHandler);
    };
  }, [onPopState]);

  useEffect(() => {
    if (location.hash === state || (state === null && location.hash === '')) {
      return;
    }

    location.hash = state === null ? '' : `${state}`;
  }, [state]);

  return [state, setState];
};

/**
 * null이 아닌 State를 반환하는 Hook입니다.
 * null이 될 수도 있고 그렇지 않은 형식을 가진 값을 항상 사용해야 할 때 사용합니다.
 *
 * @param state 상태 값
 * @returns Null이 아닌 상태 값
 */
export const useNonNullState = <T extends unknown>(state: T): NonNullable<T> => {
  const [nstate, setNState] = useState<T>(state);

  useEffect(() => {
    if (state === null) {
      return;
    }

    setNState(state);
  }, [state]);

  return nstate as NonNullable<T>;
};

/**
 * `rate`에 설정한 시간이 지나면 자동으로 슬라이드를 넘겨주는 State를 구현하는 Hook입니다.
 * @param paused 자동 슬라이드를 정지할 지에 대한 여부.
 * @param max 최대 슬라이드 수.
 * @param rate 자동 슬라이드 시간.
 * @returns [현재 슬라이드, 슬라이드 Dispatch, 현재 슬라이드가 넘어갈 때까지 남은 시간]
 */
export const usePageTurner = (
  paused: boolean,
  max: number,
  rate: number
): [number, Dispatch<SetStateAction<number>>, number] => {
  const [slide, setSlide] = useState(0);
  const [remain, setRemain] = useState(rate);
  const lastStateChange = useRef(Date.now());

  /**
   * Paused 상태인 경우 remain 시간을 마지막으로 state가 변경된 시간에서 얼마나 지났는지에 대한 시간으로 설정합니다.
   */
  useEffect(() => {
    if (!paused) {
      return;
    }

    if (!lastStateChange.current) {
      return;
    }

    setRemain(remain - (Date.now() - lastStateChange.current));
    lastStateChange.current = 0;
  }, [paused, lastStateChange, remain]);

  /**
   * Remain 시간이 지나면 슬라이드를 넘깁니다.
   */
  useEffect(() => {
    if (paused) {
      return;
    }

    const timeout = setTimeout(() => {
      unstable_batchedUpdates(() => {
        setRemain(rate);
        setSlide(slide + 1 > max ? 0 : slide + 1);
      });
    }, remain);

    lastStateChange.current = Date.now();

    return () => {
      clearTimeout(timeout);
    };
  }, [paused, max, remain, slide, rate]);

  return [slide, setSlide, remain];
};