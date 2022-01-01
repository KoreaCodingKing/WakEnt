import { IconProps, IconClass } from './IconBase';

interface ChevronIconProps {
  right?: boolean
}

export const ChevronIcon = ({
  width = 16,
  height,
  stroke = 7,
  right,
}: IconProps & ChevronIconProps) => {
  return (
    <svg
      className={IconClass}
      width={width}
      height={height ?? width}
      viewBox='0 0 22 39'
      fill='none'
      style={{
        transform: right ? '' : 'rotateY(-180deg)',
      }}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.20525 4.74036C0.244072 3.74915 0.268421 2.16643 1.25963 1.20525C2.25085 0.244072 3.83357 0.268422 4.79475 1.25964L1.20525 4.74036ZM19 19.5L20.7948 17.7596C21.7351 18.7294 21.7351 20.2706 20.7948 21.2404L19 19.5ZM4.79475 37.7404C3.83357 38.7316 2.25085 38.7559 1.25963 37.7948C0.268421 36.8336 0.244072 35.2508 1.20525 34.2596L4.79475 37.7404ZM4.79475 1.25964L20.7948 17.7596L17.2052 21.2404L1.20525 4.74036L4.79475 1.25964ZM20.7948 21.2404L4.79475 37.7404L1.20525 34.2596L17.2052 17.7596L20.7948 21.2404Z'
        strokeWidth={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronIcon;
