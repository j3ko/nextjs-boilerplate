import { Action, createAction } from '@reduxjs/toolkit';
import Router from 'next/router';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs';

import { persistor } from '..';
import { RootState } from '../features';
import { logoutSuccess } from '../features/user';

export const logout = createAction('user/logout');

export const logoutEpic: Epic<Action<any>, Action<any>, RootState> = (action$) =>
  action$.pipe(
    ofType(logout.type),
    mergeMap(async () => {
      await persistor.pause();
      await persistor.flush();
      await persistor.purge();
      Router.reload();
      return logoutSuccess();
    }),
  );

export const userEpic = combineEpics(logoutEpic);
