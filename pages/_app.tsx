import '../styles/globals.scss';
import 'normalize.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { motion } from 'framer-motion';
import { RecoilRoot } from 'recoil';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0  },
};

function MyApp ({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#1e3c34" />
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
          <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "da145f388b1b4b7fb9adc81847cabe15"}'></script>
        </Head>
        <motion.div
          key={router.route}
          variants={variants}
          className={'page-wrapper'}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </>
    </RecoilRoot>
  );
}

export default MyApp;
