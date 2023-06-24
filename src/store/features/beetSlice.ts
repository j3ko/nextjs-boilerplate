import { createSlice } from '@reduxjs/toolkit'

export const beetSlice = createSlice({
  name: "beet",
  initialState: {
    beets: 0
  },
  reducers:{
    addBeet: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.beets += 1
    },
  }
})

