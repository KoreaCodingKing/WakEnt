import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '../../styles/components/contents/ContentsHeader.module.scss';
import { classes } from '../../utils/class';
import HeaderBase from '../common/Header';
import { MenuButton } from '../isedol/IsedolHeader';
import { WakEnterLogo } from '../wakenter/WakEnterHeader';

interface ContentHeaderProps {
  white?: boolean;
}

const Menus = [
  {
    title: 'Contents',
    link: '/contents/contents'
  },
  {
    title: 'Goods',
    link: '/contents/goods'
  },
  {
    title: 'Supporters',
    link: '/contents/supporters'
  }
];

export const ContentsHeader = ({white}: ContentHeaderProps) => {
  const router = useRouter();
  const [isisContentsListPage, setIsContentsListPage] = useState<boolean>();

  useEffect(() => {
    if(location.pathname === '/contents/contents') {
      setIsContentsListPage(true);
      return;
    }
    setIsContentsListPage(false);
  }, []);

  const Left = (
    <>
      {isisContentsListPage && (
        <div className={styles.sidebar_btn}>
          <MenuButton open={false}></MenuButton>
        </div>
      )}
      <Link href='/contents' passHref>
        <span
          tabIndex={100}
          onKeyDown={ev => ev.key === 'Enter' && router.push('/contents')}
        >
          <WakEnterLogo clickable white={white}></WakEnterLogo>
        </span>
      </Link>
    </>
  );

  const Right = (
    <div className={classes(styles.menu, white && styles.white)}>
      {Menus.map(menu => (
        <Link key={`link-${menu.title}`} href={menu.link}>
          <a className={styles.link}>{menu.title}</a>
        </Link>
      ))}
    </div>
  )

  return <HeaderBase left={Left} right={Right}></HeaderBase>;
};

export default ContentsHeader;