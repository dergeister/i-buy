import { GroceryItem } from '../models/GroceryItem'
import { groceryItemService } from '../services/groceryItemService'
import { useAppSelector, useAppDispatch } from '../store/hooks'

import {
  selectGroceryItems,
  selectIsLoading,
  setGroceryItems,
  setIsLoading
} from '../store/slices/GroceryItemSlice'

interface GroceryItemHook {
  groceryItems: GroceryItem[] | null
  isLoading: boolean
  // error: string | null
  fetchGroceryItems: () => Promise<void>
  // postGroceryItems: (item: GroceryItem) => Promise<void>
}

function useGroceryItem(): GroceryItemHook {
  const groceryItems = useAppSelector(selectGroceryItems)
  const isLoading = useAppSelector(selectIsLoading)

  const dispatch = useAppDispatch()

  const fetchGroceryItems = async () => {
    dispatch(setIsLoading(true))

    const result = await groceryItemService.fetchGroceryItems()

    dispatch(setGroceryItems(result))
    dispatch(setIsLoading(false))
  }

  /*

  const createGroceryItems = async (item: GroceryItem) => {
    try {
      setLoading(true)

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Async function result')
        }, 1000)
      })

      const response = await fetch('http://localhost:3000/GroceryItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
*/
  return { isLoading, groceryItems, fetchGroceryItems }
}

export { useGroceryItem }
