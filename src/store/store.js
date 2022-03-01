import { configureStore } from '@reduxjs/toolkit'
import dogReducer from './slices/dogSlice'
import catReducer from './slices/catSlice'

export default configureStore({
  reducer: {
    dog: dogReducer,
    cat: catReducer,
  },
})
