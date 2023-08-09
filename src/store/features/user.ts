import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    logoutSuccess: (state) => {
      // Reset your state values if needed
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
