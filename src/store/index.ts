import { createContext, useContext } from 'react';
import { create, createStore, StateCreator, useStore as useZustandStore } from 'zustand'
import { persist } from 'zustand/middleware';

import createBearSlice, { BearSlice } from './features/bearSlice';
import createBeetSlice, { BeetSlice } from './features/beetSlice';
import createUserSlice, { UserSlice } from './features/userSlice';

export type AppState =  BearSlice & BeetSlice & UserSlice;

export type AppStore = ReturnType<typeof initializeStore>;

// interface StoreInterface {
//   lastUpdate: number
//   light: boolean
//   count: number
//   tick: (lastUpdate: number, light: boolean) => void
//   increment: () => void
//   decrement: () => void
//   reset: () => void
// }

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

// const getDefaultInitialState = (): Partial<State> => ({})

export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<AppStore | null>(null)

export const Provider = zustandContext.Provider

export const useStore = <T>(selector: (state: AppState) => T) => {
  const store = useContext(zustandContext)

  if (!store) throw new Error('Store is missing the provider')

  return useZustandStore(store, selector)
}

// const getDefaultInitialState = async () => {

//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const nextJs = await res.json()

//   return {
//     nextJs
//   }
// }

// const createInitialSlice: StateCreator<AppState, [], [], Promise<{ nextJs: any }>> = async (set) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const nextJs = await res.json()

//   return { nextJs }
// };

export const initializeStore = (
  preloadedState: Partial<AppState> = {}
) => {
  return createStore<AppState>((...a) => {
    
    return {
      // ...getDefaultInitialState(),
      ...createBearSlice(...a),
      ...createBeetSlice(...a),
      ...createUserSlice(...a),
      ...preloadedState,
    }
  })
}