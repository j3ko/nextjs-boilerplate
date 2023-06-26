import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate as PersistGateClient } from 'redux-persist/integration/react';

import { wrapper } from '@/store';

class PersistGateServer extends React.Component<any> {
  render() {
    return this.props.children;
  }
}

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  let runtime = process.env.RUNTIME;
  let PersistGate = PersistGateServer;
  if (runtime === 'browser') {
    PersistGate = PersistGateClient;
  }

  const [isHydrated, setIsHydrated] = useState(false);

  // waiting for after first hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={(store as any).__persistor}>
        {isHydrated ? <Component {...pageProps} /> : <></>}
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
