import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { GroceryItem } from '../../models/GroceryItem'

export interface GroceryItemState {
  groceryItems: GroceryItem[]
  isLoading: boolean
}

const initialState: GroceryItemState = {
  groceryItems: [],
  isLoading: false
}

export const groceryItemSlice = createSlice({
  name: 'groceryItem',
  initialState,
  reducers: {
    setGroceryItems: (state, action: PayloadAction<GroceryItem[]>) => {
      state.groceryItems = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const selectGroceryItems = (state: RootState) => state.groceryItem.groceryItems
export const selectIsLoading = (state: RootState) => state.groceryItem.isLoading

export const { setGroceryItems, setIsLoading } = groceryItemSlice.actions

export default groceryItemSlice.reducer
