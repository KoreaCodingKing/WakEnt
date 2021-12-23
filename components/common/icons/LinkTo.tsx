import { IconProps, IconClass } from './IconBase';

export const LinkToIcon = ({ width = 16, stroke = 7 }: IconProps) => {
  return (
    <svg
      className={IconClass}
      width={width}
      height={width}
      viewBox='0 0 46 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 42L42 4M42 4H19.6471M42 4V23.6706'
        strokeWidth={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LinkToIcon;
