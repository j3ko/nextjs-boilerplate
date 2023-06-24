import { combineReducers } from '@reduxjs/toolkit';
import bearReducer from './bearSlice';

export const rootReducer = combineReducers(
  {
    bear: bearReducer,
  }
);