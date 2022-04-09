import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/components/isedol/IsedolMenuOverlay.module.scss';
import { classes } from '../../utils/class';
import LinkToIcon from '../common/icons/LinkTo';
import { useBodyLock } from '../common/Scroll';
import { WakEnterLogoLink } from '../wakenter/WakEnterHeader';

interface IsedolMenuOverlayProps {
  open: boolean
}

const Links = [
  {
    name: 'Notice',
    page: '/isedol/notice',
  },
  {
    name: 'MEMBERS',
    page: '/isedol/members',
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


interface LinkStyles extends React.CSSProperties {
  '--index': string
}

export const IsedolMenuOverlay = ({ open }: IsedolMenuOverlayProps) => {
  const router = useRouter();

  useBodyLock(open);

  return (
    <div className={classes(styles.overlay, open && styles.open)}>
      {open && (
        <Head>
          <meta name='theme-color' content={'#FFFFFF'}></meta>
        </Head>
      )}
      <div className={styles.contents}>
        <div className={styles.links}>
          {Links.map((v, i) => (
            <Link href={v.page} key={`menu-link-${i}-${v.name}`} passHref>
              <a
                className={classes(
                  styles.link,
                  v.page === router.route && styles.current
                )}
                style={{
                  '--index': `${(i + 1) / (Links.length + 1)}`
                } as LinkStyles}
                tabIndex={100}
                onKeyDown={ev => ev.key === 'Enter' && router.push(v.page)}
              >
                <h1>{v.name}</h1>
                {v.page[0] !== '/' && <LinkToIcon></LinkToIcon>}
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.attribution}>
          <p>Background Illustration by SE2RA on WAKZOO.</p>
          <p>Profile Photo by 여비날 on WAKZOO.</p>
        </div>
        <WakEnterLogoLink className={styles.logo}></WakEnterLogoLink>
      </div>
    </div>
  );
};

export default IsedolMenuOverlay;
