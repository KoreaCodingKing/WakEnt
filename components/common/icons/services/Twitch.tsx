import { IconProps, IconClass } from '../IconBase';

export const TwitchIcon = ({ width = 18, height }: IconProps) => {
  return (
    <svg
      className={IconClass}
      width={width}
      height={height ?? width * 1.16}
      viewBox='0 0 25 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.75 0L0 3.75V17.25H4.5V21L8.25 17.25H11.25L18 10.5V0H3.75ZM16.5 9.75L13.5 12.75H10.5L7.875 15.375V12.75H4.5V1.5H16.5V9.75Z'
        fill='white'
        stroke='white'
      />
      <path d='M14.25 4.125H12.75V8.625H14.25V4.125Z' fill='white' stroke='white'/>
      <path d='M10.125 4.125H8.625V8.625H10.125V4.125Z' fill='white' stroke='white'/>
    </svg>
  );
};

export default TwitchIcon;
