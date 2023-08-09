import { Action, createAction } from '@reduxjs/toolkit';
import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs';

import { RootState } from '../features';
import { setBear } from '../features/bear';

export const fetchNextJson = createAction('user/fetchNextJson');
/**
 * Perform server-side query
 */
export const fetchNextJsonEpic: Epic<Action<unknown>, Action<unknown>, RootState> = (action$) =>
  action$.pipe(
    ofType(fetchNextJson.type),
    mergeMap(async () => {
      const res = await fetch('https://api.github.com/repos/vercel/next.js');
      const json = await res.json();
      return setBear(json.subscribers_count);
    }),
  );
