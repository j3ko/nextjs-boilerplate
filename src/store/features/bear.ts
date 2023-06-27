import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const bearSlice = createSlice({
  name: 'bear',
  initialState: {
    count: 0,
  },
  reducers: {
    setBear: (state, action) => {
      state.count = action.payload;
    },
    addBear: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
  },
  extraReducers: {
    // More information on why this is needed can be found here:
    // https://github.com/kirill-konshin/next-redux-wrapper#how-it-works
    [HYDRATE]: (state, action) => {
      // console.log('HYDRATE', state, action.payload);
      const result = {
        ...state,
        ...action.payload.bear,
      };
      return result;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBear, addBear } = bearSlice.actions;
export default bearSlice.reducer;
