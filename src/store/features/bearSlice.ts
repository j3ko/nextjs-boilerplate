import { StateCreator } from 'zustand';

import { AppState } from '..';

export interface BearSlice {
  bears: number;
  addBear: () => void;
}
const createBearSlice: StateCreator<AppState, [], [], BearSlice> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: (state.bears += 1) })),
});

export default createBearSlice;
