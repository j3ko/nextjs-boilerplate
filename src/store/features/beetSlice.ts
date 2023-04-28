import { StateCreator } from 'zustand';

import { State } from '..';

export interface BeetSlice {
  beets: number;
  addBeet: () => void;
}
const createBeetSlice: StateCreator<State, [], [], BeetSlice> = (set) => ({
  beets: 0,
  addBeet: () => set((state) => ({ beets: (state.beets += 1) })),
});

export default createBeetSlice;
