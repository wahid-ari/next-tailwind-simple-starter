import { Inter } from 'next/font/google';

import { GlobalProvider } from '@/context/GlobalContext';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </GlobalProvider>
  );
}

export default MyApp;
