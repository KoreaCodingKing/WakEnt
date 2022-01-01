import { IconProps, IconClass } from '../IconBase';

export const InstagramIcon = ({ width = 18, height }: IconProps) => {
  return (
    <svg
      className={IconClass}
      width={width}
      height={height ?? width * 1.05}
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.00084 0.5C6.55657 0.5 6.24982 0.510688 5.28981 0.554375C4.33167 0.59825 3.67766 0.749938 3.10541 0.9725C2.51346 1.20238 2.01133 1.50988 1.51108 2.01031C1.01045 2.51056 0.702945 3.01269 0.472317 3.60444C0.24919 4.17687 0.0973134 4.83106 0.054188 5.78881C0.01125 6.74881 0 7.05575 0 9.5C0 11.9443 0.0108753 12.2501 0.0543757 13.2101C0.0984387 14.1682 0.250128 14.8222 0.472505 15.3944C0.70257 15.9864 1.01007 16.4885 1.51052 16.9888C2.01058 17.4894 2.51271 17.7976 3.10428 18.0275C3.67691 18.2501 4.33111 18.4018 5.28905 18.4456C6.24906 18.4893 6.55563 18.5 8.99972 18.5C11.4442 18.5 11.75 18.4893 12.71 18.4456C13.6681 18.4018 14.3229 18.2501 14.8955 18.0275C15.4873 17.7976 15.9887 17.4894 16.4887 16.9888C16.9894 16.4885 17.2969 15.9864 17.5275 15.3946C17.7487 14.8222 17.9006 14.168 17.9456 13.2103C17.9888 12.2503 18 11.9443 18 9.5C18 7.05575 17.9888 6.749 17.9456 5.789C17.9006 4.83087 17.7487 4.17687 17.5275 3.60462C17.2969 3.01269 16.9894 2.51056 16.4887 2.01031C15.9881 1.50969 15.4875 1.20219 14.895 0.9725C14.3212 0.749938 13.6668 0.59825 12.7087 0.554375C11.7487 0.510688 11.4431 0.5 8.99803 0.5H9.00084ZM8.19346 2.12187C8.43309 2.1215 8.70047 2.12187 9.00084 2.12187C11.4039 2.12187 11.6887 2.1305 12.6376 2.17363C13.5151 2.21375 13.9914 2.36038 14.3086 2.48356C14.7287 2.64669 15.0281 2.84169 15.3429 3.15669C15.6579 3.47169 15.8529 3.77169 16.0164 4.19169C16.1396 4.50856 16.2864 4.98481 16.3264 5.86231C16.3695 6.81106 16.3789 7.09606 16.3789 9.49794C16.3789 11.8998 16.3695 12.1848 16.3264 13.1336C16.2862 14.0111 16.1396 14.4873 16.0164 14.8042C15.8533 15.2242 15.6579 15.5233 15.3429 15.8381C15.0279 16.1531 14.7288 16.3481 14.3086 16.5112C13.9918 16.6349 13.5151 16.7812 12.6376 16.8213C11.6889 16.8644 11.4039 16.8738 9.00084 16.8738C6.59763 16.8738 6.31282 16.8644 5.36406 16.8213C4.48655 16.7808 4.01029 16.6342 3.69285 16.511C3.27285 16.3479 2.97284 16.1529 2.65784 15.8379C2.34284 15.5229 2.14783 15.2236 1.98433 14.8034C1.86114 14.4866 1.71433 14.0103 1.67439 13.1328C1.63127 12.1841 1.62264 11.8991 1.62264 9.49569C1.62264 7.09231 1.63127 6.80881 1.67439 5.86006C1.71452 4.98256 1.86114 4.50631 1.98433 4.18906C2.14746 3.76906 2.34284 3.46906 2.65784 3.15406C2.97284 2.83906 3.27285 2.64406 3.69285 2.48056C4.0101 2.35681 4.48655 2.21056 5.36406 2.17025C6.19431 2.13275 6.51607 2.1215 8.19346 2.11963V2.12187ZM13.805 3.61625C13.2088 3.61625 12.725 4.09944 12.725 4.69587C12.725 5.29212 13.2088 5.77588 13.805 5.77588C14.4013 5.77588 14.885 5.29212 14.885 4.69587C14.885 4.09962 14.4013 3.61588 13.805 3.61588V3.61625ZM9.00084 4.87812C6.44838 4.87812 4.37892 6.94756 4.37892 9.5C4.37892 12.0524 6.44838 14.1209 9.00084 14.1209C11.5533 14.1209 13.622 12.0524 13.622 9.5C13.622 6.94756 11.5531 4.87812 9.00066 4.87812H9.00084ZM9.00084 6.5C10.6576 6.5 12.0009 7.84306 12.0009 9.5C12.0009 11.1567 10.6576 12.5 9.00084 12.5C7.34389 12.5 6.00081 11.1567 6.00081 9.5C6.00081 7.84306 7.34389 6.5 9.00084 6.5Z'
        fill='white'
      />
    </svg>
  );
};

export default InstagramIcon;