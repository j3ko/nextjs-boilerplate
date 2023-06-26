import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { rootEpic, rootReducer, RootState } from './features';

const persistedReducer = persistReducer(
  {
    key: 'root',
    blacklist: ['bear'],
    storage,
  },
  rootReducer,
);

const clientMiddleware = createEpicMiddleware<any, any, RootState>();

const clientStore = configureStore({
  reducer: persistedReducer,
  middleware: [clientMiddleware],
  // devTools: process.env.NODE_ENV !== 'production',
});

(clientStore as any).__persistor = persistStore(clientStore);

clientMiddleware.run(rootEpic as Epic<any, any, RootState, any>);

export const persistor = persistStore(clientStore);

const serverMiddleware = createEpicMiddleware<any, any, RootState>();

const serverStore = configureStore({
  reducer: rootReducer,
  middleware: [serverMiddleware],
  // devTools: process.env.NODE_ENV !== 'production',
});

serverMiddleware.run(rootEpic as Epic<any, any, RootState, any>);

// export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(({ isServer }: any) => (isServer ? serverStore : clientStore));
