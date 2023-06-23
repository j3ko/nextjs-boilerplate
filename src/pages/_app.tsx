import StoreProvider from '@/store/StoreProvider';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // const [isHydrated, setIsHydrated] = useState(false);

  // // hacky fix for zustand persist issue:
  // // https://github.com/pmndrs/zustand/issues/1145#issuecomment-1304856686
  // // waiting for after first hydration
  // useEffect(() => {
  //   setIsHydrated(true);
  // }, []);

  return (
    <StoreProvider {...pageProps.initialState}>
      <Component {...pageProps} /> 
    </StoreProvider>
  );
}
