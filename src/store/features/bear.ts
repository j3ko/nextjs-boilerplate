import { Action, createAction, createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper";
import { combineEpics, Epic, ofType } from "redux-observable";
import { mergeMap } from "rxjs";
import { RootState } from ".";

const bearSlice = createSlice({
  name: "bear",
  initialState: {
    count: 0
  },
  reducers:{
    addBear: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.bear
      };
    },
  },
})


export const fetchNextJson = createAction('user/fetchNextJson');

const fetchNextJsonEpic: Epic<Action<any>, Action<any>, RootState> = (action$) =>
action$.pipe(
  ofType(fetchNextJson.type),
  mergeMap(async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return addBear(json.subscribers_count);
  })
);

export const bearEpic = combineEpics(fetchNextJsonEpic);
// Action creators are generated for each case reducer function
export const { addBear } = bearSlice.actions
export default bearSlice.reducer