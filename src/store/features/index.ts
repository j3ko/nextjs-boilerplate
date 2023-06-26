import { combineReducers } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';

import bear, { bearEpic } from './bear';
import beet from './beet';
import user, { userEpic } from './user';

export const rootReducer = combineReducers({
  bear: bear,
  beet: beet,
  user: user,
});

export const rootEpic = combineEpics(
  userEpic,
  bearEpic,
  // add more epics here if needed
);

export type RootState = ReturnType<typeof rootReducer>;
