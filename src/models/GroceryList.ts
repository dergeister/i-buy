import { GroceryListType } from '../enums/ListTypeEnum'
import { GroceryItem } from './GroceryItem'

class GroceryList {
  name: string
  items: GroceryItem[]
  listType: GroceryListType

  constructor(name: string, items: GroceryItem[], listType: GroceryListType) {
    this.name = name
    this.items = items
    this.listType = listType
  }

  public AddItem(item: GroceryItem): void {
    this.items.push(item)
  }

  public RemoveItem(itemId: string): void {
    this.items = this.items.filter((i) => i.id == itemId)
  }
}

export { GroceryList }
