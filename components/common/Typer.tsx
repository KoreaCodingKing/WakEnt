import { HTMLAttributes, ReactText, useEffect, useState } from 'react';

interface TyperProps {
  progress: number
  children: ReactText
}

export const Typer = ({
  progress = 0,
  children,
  ...props
}: TyperProps & HTMLAttributes<HTMLParagraphElement>) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const text = children.toString();
    setCurrentText(text.substring(0, Math.floor(text.length * progress)) || ' ');
  }, [progress]);

  return <p {...props}>{currentText}</p>;
};

export default Typer;
