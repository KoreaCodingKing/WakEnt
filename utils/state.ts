import { Dispatch, SetStateAction, useEffect, useState } from "react";

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
 * @returns
 */
export const useHashState = <S extends string | null>(
  initialState: S | (() => S)
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
export const useNonNullState = <T extends unknown>(state: T) => {
  const [nstate, setNState] = useState<T>(state);

  useEffect(() => {
    if (state === null) {
      return;
    }

    setNState(state);
  }, [state]);

  return nstate;
};
