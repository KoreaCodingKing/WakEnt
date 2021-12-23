import { ReactNode, RefObject, useLayoutEffect, useState } from 'react';

interface HorizonalScrollerProps {
  children: ReactNode[]
}

/**
 * 수직으로 작동하는 페이지 스크롤러를 사용합니다.
 * @param parent 
 * @param target 
 * @returns 
 */
export const useHorizonalScroller = (parent: HTMLElement | null, target: RefObject<HTMLElement> | null) => {
  const [page, setPage] = useState<number>(0);

  useLayoutEffect(() => {
    // console.log(parent, target);
  }, []);

  return [page, setPage];
};

export const HorizonalScroller = ({ children }: HorizonalScrollerProps) => {
  return <>
    {children}
  </>;
};

export default HorizonalScroller;
