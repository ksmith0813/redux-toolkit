import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'cat',
  initialState: {
    cats: [],
  },
  reducers: {
    addCat: (state, action) => {
      state.cats.push({ name: action.payload })
    },
  },
})

export const { addCat } = slice.actions

export const getState = (state) => state.cat

export default slice.reducer
