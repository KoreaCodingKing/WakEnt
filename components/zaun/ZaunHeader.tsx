import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { concatClass } from '../../utils/class';
import HeaderBase, { HeaderBaseProps } from '../common/Header';

import styles from '../../styles/components/zaun/ZaunHeader.module.scss';

interface WakEnterElementProps {
  className?: string
  clickable?: boolean
};

const Menus = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Supporters',
    link: '/supporters',
  },
];

const WakMenus = ({clickable, className}: WakEnterElementProps) => {
  return (
    <div
      className={concatClass(
        styles.logo,
        clickable && styles.clickable,
        className
      )}
    >
      <div className={styles.logoImage}>
        <Image
          src='/images/zaun/logo_zaun_white.png'
          layout='fill'
          alt='WAK'
        ></Image>
      </div>
      <div className={styles.logoText}>
        <span>ENTERTAINMENT</span>
      </div>
    </div>
  );
};

const ZaunLogo = ({clickable, className}: WakEnterElementProps) => {
  return (
    <div
      className={concatClass(
        styles.logo,
        clickable && styles.clickable,
        className
      )}
    >
      <div className={styles.logoImage}>
        <Image
          src='/images/zaun/logo_zaun_white.png'
          layout='fill'
          alt='zaun'
        ></Image>
      </div>
      <div className={styles.logoText}>
        <span>League Of Zaun</span>
      </div>
    </div>
  );
};

export const ZaunHeader = () => {
  const router = useRouter();

  const Left = (
    <Link href='/' passHref>
      <span
        tabIndex={100}
        onKeyDown={ev => ev.key === 'Enter' && router.push('/')}
      >
        <ZaunLogo clickable></ZaunLogo>
      </span>
    </Link>
    );
  const Right = <WakMenus></WakMenus>;
  return <HeaderBase left={Left} right={Right}></HeaderBase>;
};

export default ZaunHeader;