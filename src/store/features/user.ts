import { Action, createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import Router from 'next/router';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { RootState } from '.';
// import { persistor } from '..';


export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers:{
    logoutSuccess: (state) => {
      // Reset your state values if needed
      return state;
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     // console.log('HYDRATE', state, action.payload);
  //     const result = {
  //       ...state,
  //       ...action.payload.user
  //     };
  //     return result;
  //   },
  // },
})

export const logout = createAction('user/logout'); 

const logoutEpic: Epic<Action<any>, Action<any>, RootState> = (action$) =>
  action$.pipe(
    ofType(logout.type),
    mergeMap(async () => {
      // await persistor.pause();
      // await persistor.flush();
      // await persistor.purge();
      Router.reload();
      return logoutSuccess();
    })
  );

export const userEpic = combineEpics(logoutEpic);
// Action creators are generated for each case reducer function
export const { logoutSuccess } = userSlice.actions
export default userSlice.reducer