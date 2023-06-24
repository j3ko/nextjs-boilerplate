import { createSlice } from '@reduxjs/toolkit';
import Router from 'next/router';
import { persistor } from '..';

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers:{
    logout: async () => {
      await persistor.pause();
      await persistor.flush()
      await persistor.purge();
      Router.reload();
    },
  }
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer