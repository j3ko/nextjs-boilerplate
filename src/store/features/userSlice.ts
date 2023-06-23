import Router from 'next/router';
import { StateCreator } from 'zustand';

import { AppState } from '..';

export interface UserSlice {
  nextJs: any,
  logout: () => void;
}
const createUserSlice: StateCreator<AppState, [], [], UserSlice> = () => ({
  nextJs: undefined,
  logout: () => {
    // useBoundStore.persist.clearStorage();
    Router.reload();
  },
});

export default createUserSlice;
