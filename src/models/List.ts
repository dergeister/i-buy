import { ListType } from '../enums/ListTypeEnum'
import { ListItem } from './ListItem'

class List {
  name: string
  items: ListItem[]
  listType: ListType

  constructor(name: string, items: ListItem[], listType: ListType) {
    this.name = name
    this.items = items
    this.listType = listType
  }

  public AddItem(item: ListItem): void {
    this.items.push(item)
  }

  public RemoveItem(itemId: string): void {
    this.items = this.items.filter((i) => i.id == itemId)
  }
}

export { List }
