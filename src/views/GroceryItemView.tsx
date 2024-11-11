import { GroceryItemForm } from '../components/GroceryItem/GroceryItemForm'
import { GroceryItemList } from '../components/GroceryItem/GroceryItemList'

const GroceryItemView = () => {
  return (
    <>
      <GroceryItemForm />
      <hr className="my-6" />
      <GroceryItemList />
    </>
  )
}

export { GroceryItemView }
