import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/conterSlice'
export const store = configureStore({
  reducer: {
    user: counterReducer,
  },
})