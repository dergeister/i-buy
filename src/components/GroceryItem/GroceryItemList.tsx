import { useEffect } from 'react'
import { useGroceryItem } from '../../hooks/useGroceryItem'

import { GroceryItemListItem } from './GroceryItemListItem'

const GroceryItemList = () => {
  const { isLoading, groceryItems, fetchGroceryItems } = useGroceryItem()

  useEffect(() => {
    fetchGroceryItems()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <ul>
      {groceryItems?.map((groceryItem, index) => {
        return (
          <GroceryItemListItem
            key={`grocery-item-${index}`}
            id={groceryItem.id!}
            name={groceryItem.name}
          />
        )
      })}
    </ul>
  )
}

export { GroceryItemList }
