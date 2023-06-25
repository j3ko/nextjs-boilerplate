import { wrapper } from '@/store';
import { RootState } from '@/store/features';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const MyApp = ({ Component, ...rest }: AppProps) => {
  // problem is probably here somewhere
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Component {...pageProps} />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default MyApp;

