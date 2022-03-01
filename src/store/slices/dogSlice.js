import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'dog',
  initialState: {
    dogs: [],
  },
  reducers: {
    addDog: (state, action) => {
      state.dogs.push({ name: action.payload })
    },
  },
})

export const { addDog, removeDog } = slice.actions

export const getState = (state) => state.dog

export default slice.reducer
