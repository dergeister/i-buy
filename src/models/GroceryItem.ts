interface IGroceryItem {
  id?: string
  name: string
  // completed?: boolean
}

class GroceryItem {
  id?: string
  name: string
  // completed: boolean | undefined

  constructor(groceryItem: IGroceryItem) {
    this.id = groceryItem.id
    this.name = groceryItem.name
    // this.completed = groceryItem.completed
  }

  // public MarkAsCompleted(): void {
  //   this.completed = true
  // }

  // public MarkAsNotCompleted(): void {
  //   this.completed = false
  // }
}

export { GroceryItem }
export type { IGroceryItem }
