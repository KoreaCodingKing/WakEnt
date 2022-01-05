import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/components/isedol/IsedolMenuOverlay.module.scss';
import { concatClass } from '../../utils/class';
import LinkToIcon from '../common/icons/LinkTo';
import { useBodyLock } from '../common/Scroll';
import { WakEnterLogo } from '../wakenter/WakEnterHeader';

interface IsedolMenuOverlayProps {
  open: boolean
}

const Links = [
  {
    name: 'NOTICE',
    page: '/isedol/notice',
  },
  {
    name: 'MEMBER',
    page: '/isedol/member',
  },
  {
    name: 'DISCOGRAPHY',
    page: '/isedol/discography',
  },
  {
    name: 'YouTube',
    page: 'https://youtube.com/c/welshcorgimessi',
  },
  {
    name: 'WAKZOO',
    page: 'https://cafe.naver.com/steamindiegame',
  },
];

export const IsedolMenuOverlay = ({ open }: IsedolMenuOverlayProps) => {
  const router = useRouter();

  useBodyLock(open);

  return (
    <div className={concatClass(styles.overlay, open && styles.open)}>
      {open && (
        <Head>
          <meta name='theme-color' content={'#FFFFFF'}></meta>
        </Head>
      )}
      <div className={styles.contents}>
        <div className={styles.links}>
          {Links.map((v, i) => (
            <Link href={v.page} key={`menu-link-${i}-${v.name}`} passHref>
              <div
                className={concatClass(
                  styles.link,
                  v.page === router.route && styles.current
                )}
                tabIndex={100}
                onKeyDown={ev => ev.key === 'Enter' && router.push(v.page)}
              >
                <h1>{v.name}</h1>
                {v.page[0] !== '/' && <LinkToIcon></LinkToIcon>}
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.attribution}>
          <p>Background Illustration by SE2RA on WAKZOO.</p>
          <p>Profile Photo by 여비날 on WAKZOO.</p>
        </div>
        <Link key={'link-wak-enter'} href={'/'} passHref>
          <div
            className={styles.logo}
            tabIndex={100}
            onKeyDown={ev => ev.key === 'Enter' && router.push('/')}
          >
            <WakEnterLogo></WakEnterLogo>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IsedolMenuOverlay;
