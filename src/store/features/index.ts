import { combineReducers } from '@reduxjs/toolkit';

import bear from './bear';
import beet from './beet';
import user from './user';

export const rootReducer = combineReducers({
  bear: bear,
  beet: beet,
  user: user,
});

export type RootState = ReturnType<typeof rootReducer>;
