import { ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode
  active?: boolean
}

const ActiveCSS: React.CSSProperties = {
  backgroundAttachment: 'fixed',
  transform: 'translateZ(-1px) scale(2)'
};

export const Parallax = ({
  children,
  active
}: ParallaxProps) => {
  return <div style={active ? ActiveCSS : {}}>
    {children}
  </div>;
};

export default Parallax;