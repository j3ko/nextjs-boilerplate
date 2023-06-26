import { createSlice } from '@reduxjs/toolkit';

export const beetSlice = createSlice({
  name: 'beet',
  initialState: {
    count: 0,
  },
  reducers: {
    addBeet: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     console.log('HYDRATE', state, action.payload);
  //     const result = {
  //       ...state,
  //       ...action.payload.beet
  //     };
  //     return result;
  //   },
  // },
});

// Action creators are generated for each case reducer function
export const { addBeet } = beetSlice.actions;

export default beetSlice.reducer;
