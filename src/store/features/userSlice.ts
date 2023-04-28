import Router from 'next/router';
import { StateCreator } from 'zustand';

import useBoundStore, { State } from '..';

export interface UserSlice {
  logout: () => void;
}
const createUserSlice: StateCreator<State, [], [], UserSlice> = () => ({
  logout: () => {
    useBoundStore.persist.clearStorage();
    Router.reload();
  },
});

export default createUserSlice;
