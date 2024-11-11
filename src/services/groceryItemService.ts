import { GroceryItem } from '../models/GroceryItem'
import { delay } from '../utils/delay'

export class GroceryItemError {}

class GroceryItemService {
  fetchGroceryItems = async (): Promise<GroceryItem[]> => {
    await delay()

    const response = await fetch('http://localhost:3000/GroceryItem')

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const result: GroceryItem[] = await response.json()

    return result
  }
}

export const groceryItemService = new GroceryItemService()
