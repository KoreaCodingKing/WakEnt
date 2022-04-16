import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/components/contents/ContentsHeader.module.scss';
import { classes } from '../../utils/class';
import HeaderBase from '../common/Header';
import { WakEnterLogo } from '../wakenter/WakEnterHeader';

interface ContentHeaderProps {
  white?: boolean,
  fitHeight?: boolean
}

const Menus = [
  {
    title: 'Goods',
    link: '/contents/goods'
  },
  {
    title: 'Supporters',
    link: '/contents/supporters'
  }
];

export const ContentsHeader = ({white, fitHeight}: ContentHeaderProps) => {
  const router = useRouter();

  const Left = (
    <Link href='/' passHref>
      <span
        tabIndex={100}
        onKeyDown={ev => ev.key === 'Enter' && router.push('/')}
      >
        <WakEnterLogo clickable white={white}></WakEnterLogo>
      </span>
    </Link>
  );

  const Right = (
    <div className={classes(styles.menu, white && styles.white)}>
      {Menus.map(menu => (
        <Link key={`link-${menu.title}`} href={menu.link}>
          <a className={styles.link}>{menu.title}</a>
        </Link>
      ))}
    </div>
  );

  return (
    <div className={styles.contents_header}>
      <HeaderBase left={Left} right={Right} fitHeight={fitHeight}></HeaderBase>
    </div>
  );
};

export default ContentsHeader;