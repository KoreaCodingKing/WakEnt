import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/components/contents/ContentsHeader.module.scss';
import HeaderBase from '../common/Header';
import { WakEnterLogo } from '../wakenter/WakEnterHeader';

const Menus = [
  {
    title: 'Games',
    link: '/contents/total'
  },
  {
    title: 'Goods',
    link: '/contents/goods'
  },
  {
    title: 'Supporters',
    link: '/contents/supporteers'
  }
];

const RightMenus = () => {
  return (
    <div className={styles.menu}>
      {Menus.map(menu => (
        <Link key={`link-${menu.title}`} href={menu.link}>
          <a className={styles.link}>{menu.title}</a>
        </Link>
      ))}
    </div>
  );
};

export const ContentsHeader = () => {
  const router = useRouter();

  const Left = (
    <Link href='/contents' passHref>
      <span
        tabIndex={100}
        onKeyDown={ev => ev.key === 'Enter' && router.push('/contents')}
      >
        <WakEnterLogo clickable white></WakEnterLogo>
      </span>
    </Link>
  );
  const Right = <RightMenus></RightMenus>;
  return <HeaderBase left={Left} right={Right}></HeaderBase>;
};

export default ContentsHeader;