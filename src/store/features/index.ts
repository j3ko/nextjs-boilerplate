import { combineReducers } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';
import bearReducer from './bear';
import beetReducer from './beet';
import userReducer, { userEpic } from './user';

export const rootReducer = combineReducers(
  {
    bear: bearReducer,
    beet: beetReducer,
    user: userReducer,
  }
);

export const rootEpic = combineEpics(
  userEpic
  // add more epics here if needed
);

export type RootState = ReturnType<typeof rootReducer>;
