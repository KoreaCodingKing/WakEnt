import { IconProps, IconClass } from '../IconBase';

export const YouTubeIcon = ({ width = 25, height }: IconProps) => {
  return (
    <svg
      className={IconClass}
      width={width}
      height={height ?? width * 0.68}
      viewBox='0 0 25 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.4851 2.66C24.1968 1.62 23.3525 0.8 22.2816 0.52C20.3253 0 12.4999 0 12.4999 0C12.4999 0 4.67461 0 2.71828 0.5C1.66803 0.78 0.803127 1.62 0.514825 2.66C0 4.56 0 8.5 0 8.5C0 8.5 0 12.46 0.514825 14.34C0.803127 15.38 1.64744 16.2 2.71828 16.48C4.6952 17 12.4999 17 12.4999 17C12.4999 17 20.3253 17 22.2816 16.5C23.3525 16.22 24.1968 15.4 24.4851 14.36C24.9999 12.46 24.9999 8.52 24.9999 8.52C24.9999 8.52 25.0205 4.56 24.4851 2.66Z'
        fill='white'
      />
      <path
        d='M16.5157 8.50011L10.0083 4.86011V12.1401L16.5157 8.50011Z'
        fill='black'
      />
    </svg>
  );
};

export default YouTubeIcon;
