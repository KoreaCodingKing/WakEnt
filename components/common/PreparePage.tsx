import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { useRef } from 'react';
import Image from 'next/image';
import WakEnterHeader from '../wakenter/WakEnterHeader';
import { classes } from '../../utils/class';
import LinkToIcon from './icons/LinkTo';
import styles from '../../styles/pages/index.module.scss';

const Links = [
  {
    name: '메인 화면으로',
    link: '/',
  },
  {
    name: '왁물원으로',
    link: 'https://cafe.naver.com/steamindiegame',
  },
];

const PreparePage: NextPage = () => {
  const scroll = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Preparing - WAK Entertainment</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <div className={styles.main}>
        <header>
          <WakEnterHeader></WakEnterHeader>
        </header>
        <div className={styles.pages} ref={scroll}>
          <section className={classes(styles.page)} data-page={1}>
            <div className={styles.representInner}>
              <div className={styles.hero}>
                <h1>Preparing...</h1>
                <p>준비중이라네. 얼른 만들어서 보여드리겠다네</p>
              </div>
              <div className={styles.links}>
                {Links.map((v, i) => (
                  <p
                    key={`main-link-${i}`}
                    className={styles.link}
                    tabIndex={100}
                    onKeyDown={ev =>
                      ev.key === 'Enter' && (window.location.href = v.link)
                    }
                  >
                    <Link href={v.link} passHref>
                      <a>
                        {v.name} <LinkToIcon width={22}></LinkToIcon>
                      </a>
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className={styles.signature}>
          <Image
            src={'/images/door/img_DrHamine.png'} layout='fill'></Image>
        </div>
      </div>
    </>
  );
};

export default PreparePage;
