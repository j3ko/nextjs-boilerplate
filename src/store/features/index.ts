import { combineReducers } from '@reduxjs/toolkit';
import bearReducer from './bearSlice';
import beetReducer from './beetSlice';
import userReducer from './userSlice';

export const rootReducer = combineReducers(
  {
    bear: bearReducer,
    beet: beetReducer,
    user: userReducer,
  }
);