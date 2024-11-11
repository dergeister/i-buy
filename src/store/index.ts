import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import GroceryItemSlice from './slices/GroceryItemSlice'

export const store = configureStore({
  reducer: {
    groceryItem: GroceryItemSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
