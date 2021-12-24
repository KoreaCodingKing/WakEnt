import '../styles/globals.scss';
import 'normalize.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1},
  exit: { opacity: 0 },
};

function MyApp ({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <motion.div
        key={router.route}
        variants={variants}
        className={'page-wrapper'}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring', duration: 0.6, delay: 0.03 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}

export default MyApp;
