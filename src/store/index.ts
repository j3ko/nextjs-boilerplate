import { createContext, useContext } from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';

import createBearSlice, { BearSlice } from './features/bearSlice';
import createBeetSlice, { BeetSlice } from './features/beetSlice';
import createUserSlice, { UserSlice } from './features/userSlice';

export type AppState =  BearSlice & BeetSlice & UserSlice;

export type AppStore = ReturnType<typeof initializeStore>;

// const useBoundStore = create<AppState>()(
//   // persist(
//     (...a) => ({
//       ...createBearSlice(...a),
//       ...createBeetSlice(...a),
//       ...createUserSlice(...a),
//     }),
//     // {
//     //   name: 'app-store',
//     // },
//   // ),
// );

export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<AppStore | null>(null)

export const Provider = zustandContext.Provider

export const useStore = <T>(selector: (state: AppState) => T) => {
  const store = useContext(zustandContext)

  if (!store) throw new Error('Store is missing the provider')

  return useZustandStore(store, selector)
}

export const initializeStore = (
  preloadedState: Partial<AppState> = {}
) => {
  return createStore<AppState>((...a) => {
    
    return {
      ...createBearSlice(...a),
      ...createBeetSlice(...a),
      ...createUserSlice(...a),
      ...preloadedState,
    }
  })
}