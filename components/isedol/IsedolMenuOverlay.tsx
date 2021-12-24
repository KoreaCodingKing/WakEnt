import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../../styles/components/isedol/IsedolMenuOverlay.module.scss';
import { concatClass } from '../../utils/class';
import LinkToIcon from '../common/icons/LinkTo';
import { WakEnterLogo } from '../wakenter/WakEnterHeader';

interface IsedolMenuOverlayProps {
  open: boolean
}

const Links = [
  {
    name: 'MEMBER',
    page: '/isedol/member',
  },
  {
    name: 'DISCOGRAPHY',
    page: '/isedol/discography'
  },
  {
    name: 'YouTube',
    page: 'https://youtube.com/c/welshcorgimessi'
  },
  {
    name: 'WAKZOO',
    page: 'https://cafe.naver.com/steamindiegame'
  }
];

const useBodyLock = (lock: boolean) => {
  useEffect(() => {
    document.body.classList[lock ? 'add' : 'remove'](styles.bodyScrollLock);

    return () => {
      document.body.classList.remove(styles.bodyScrollLock);
    };
  }, [lock]);
};

export const IsedolMenuOverlay = ({ open }: IsedolMenuOverlayProps) => {
  useBodyLock(open);

  return (
    <div className={concatClass(styles.overlay, open && styles.open)}>
      <div className={styles.contents}>
        <div className={styles.links}>
          {
            Links.map((v, i) => <Link href={v.page} key={`menu-link-${i}-${v.name}`} passHref>
              <div className={styles.link}>
                <h1>{v.name}</h1>
                {
                  v.page[0] !== '/' && <LinkToIcon></LinkToIcon>
                }
              </div>
            </Link>)
          }
        </div>
        <div className={styles.attribution}>
          <p>Background Illustration by SE2RA on WAKZOO.</p>
          <p>Profile Photo by 여비날 on WAKZOO.</p>
        </div>
        <Link key={'link-wak-enter'} href={'/'} passHref>
          <div className={styles.logo}>
            <WakEnterLogo></WakEnterLogo>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IsedolMenuOverlay;
