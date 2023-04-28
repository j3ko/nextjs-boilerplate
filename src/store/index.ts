import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import createBearSlice, { BearSlice } from './features/bearSlice';
import createBeetSlice, { BeetSlice } from './features/beetSlice';
import createUserSlice, { UserSlice } from './features/userSlice';

export type State = BearSlice & BeetSlice & UserSlice;

const useBoundStore = create<State>()(
  persist(
    (...a) => ({
      ...createBearSlice(...a),
      ...createBeetSlice(...a),
      ...createUserSlice(...a),
    }),
    {
      name: 'app-store',
    },
  ),
);

export default useBoundStore;
