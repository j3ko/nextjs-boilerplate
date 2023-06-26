import { combineEpics } from 'redux-observable';

import { fetchNextJsonEpic } from './fetchNextJson';
import { logoutEpic } from './logout';

export const rootEpic = combineEpics(logoutEpic, fetchNextJsonEpic);
