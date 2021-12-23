import '../styles/globals.scss';
import '../styles/reset.scss';
// import 'normalize.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
