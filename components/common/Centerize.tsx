import React, { ReactElement, useEffect, useRef } from 'react';

interface CenterizeProps {
  children: ReactElement
}

export const Centerize = ({ children }: CenterizeProps) => {
  const element = React.cloneElement(children);
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const child = ref.current;
    const parent = child.parentElement;

    if (!parent) {
      throw new Error('Parent element is not defined.');
    }

    const centerize = (parent: HTMLElement, child: HTMLElement) => {
      const pRect = parent.getBoundingClientRect();
      const cRect = child.getBoundingClientRect();

      const parentWidth = pRect.width;
      const parentHeight = pRect.height;

      const childWidth = cRect.width;
      const childHeight = cRect.height;

      let xAdjust = 0;
      let yAdjust = 0;

      if (parentWidth < childWidth) {
        xAdjust = (childWidth - parentWidth) / 2;
      }

      if (parentHeight < childHeight) {
        yAdjust = (childHeight - parentHeight) / 2;
      }

      child.style.transform = `translate(-${xAdjust}px, -${yAdjust}px)`;
    };

    const resizeHandler = () => {
      centerize(parent, child);
    };

    window.addEventListener('resize', resizeHandler);

    centerize(parent, child);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <>
    <element.type ref={ref} {...element.props}></element.type>
  </>;
};

export default Centerize;
