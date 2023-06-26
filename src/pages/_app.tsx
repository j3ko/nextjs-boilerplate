import { wrapper } from '@/store';
import { RootState } from '@/store/features';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import {PersistGate as PersistGateClient} from 'redux-persist/integration/react';
class PersistGateServer extends React.Component<any> {
    render() {
        return this.props.children
    }
}


const MyApp = ({ Component, ...rest }: AppProps) => {
  // problem is probably here somewhere
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  let runtime = process.env.RUNTIME;
  let PersistGate = PersistGateServer;
  if (runtime === 'browser') {
    PersistGate = PersistGateClient
  }

  const [isHydrated, setIsHydrated] = useState(false);

  // hacky fix for zustand persist issue:
  // https://github.com/pmndrs/zustand/issues/1145#issuecomment-1304856686
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

