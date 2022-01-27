import HeaderBase, { HeaderBaseProps } from '../common/Header';

import Image from 'next/image';

import styles from '../../styles/components/wakenter/WakEnterHeader.module.scss';
import { concatClass } from '../../utils/class';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface WakEnterElementProps {
  className?: string
  clickable?: boolean
  white?: boolean
}

const Menus = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: '채용',
    link: '/recruit',
  },
];

export const WakEnterLogo = ({ white, clickable, className }: WakEnterElementProps) => {
  return (
    <div
      className={concatClass(
        styles.logo,
        white && styles.white,
        clickable && styles.clickable,
        className
      )}
    >
      <div className={styles.logoImage}>
        <Image
          src='/images/wak-enter-centered.png'
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

export const WakEnterLogoLink = ({ className, white }: WakEnterElementProps) => {
  const router = useRouter();

  return <Link href={'/'} passHref>
    <div
      className={className}
      tabIndex={100}
      onKeyDown={ev => ev.key === 'Enter' && router.push('/')}
    >
      <WakEnterLogo white={white}></WakEnterLogo>
    </div>
  </Link>;
};

const WakMenus = ({ white }: WakEnterElementProps) => {
  return (
    <div className={concatClass(styles.menu, white && styles.white)}>
      {Menus.map(menu => (
        <Link key={`link-${menu.title}`} href={menu.link}>
          <a className={styles.link}>{menu.title}</a>
        </Link>
      ))}
    </div>
  );
};

export const WakEnterHeader = (props: HeaderBaseProps) => {
  const router = useRouter();

  const Left = (
    <Link href='/' passHref>
      <span
        tabIndex={100}
        onKeyDown={ev => ev.key === 'Enter' && router.push('/')}
      >
        <WakEnterLogo white={props.white} clickable></WakEnterLogo>
      </span>
    </Link>
  );
  const Right = <WakMenus white={props.white}></WakMenus>;

  return <HeaderBase {...props} left={Left} right={Right} full></HeaderBase>;
};

export default WakEnterHeader;
