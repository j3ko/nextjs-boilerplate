import { StateCreator } from 'zustand';

import { State } from '..';

export interface BearSlice {
  bears: number;
  addBear: () => void;
}
const createBearSlice: StateCreator<State, [], [], BearSlice> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: (state.bears += 1) })),
});

export default createBearSlice;
