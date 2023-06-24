import { createSlice } from '@reduxjs/toolkit'

const bearSlice = createSlice({
  name: "bear",
  initialState: {
    count: 0
  },
  reducers:{
    addBear: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
  }
})

// Action creators are generated for each case reducer function
export const { addBear } = bearSlice.actions

export default bearSlice.reducer