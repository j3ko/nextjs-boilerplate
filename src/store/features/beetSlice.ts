import { StateCreator } from 'zustand';

import { AppState } from '..';

export interface BeetSlice {
  beets: number;
  addBeet: () => void;
}
const createBeetSlice: StateCreator<AppState, [], [], BeetSlice> = (set) => ({
  beets: 0,
  addBeet: () => set((state) => ({ beets: (state.beets += 1) })),
});

export default createBeetSlice;
