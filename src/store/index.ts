import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { rootEpic, rootReducer, RootState } from './features';

const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, rootReducer)

const epicMiddleware = createEpicMiddleware<any, any, RootState>();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), epicMiddleware],
  // devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleware.run(rootEpic as Epic<any, any, RootState, any>);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch