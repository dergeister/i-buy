import { Category } from './Category'

class ListItem {
  id: string
  name: string
  categories: Category[]
  completed: boolean

  constructor(id: string, name: string, categories: Category[], completed: boolean) {
    this.id = id
    this.name = name
    this.categories = categories
    this.completed = completed
  }

  public MarkAsCompleted(): void {
    this.completed = true
  }

  public MarkAsNotCompleted(): void {
    this.completed = false
  }

  public AddCategory(category: Category): void {
    this.categories.push(category)
  }

  public RemoveCategory(categoryId: string): void {
    this.categories = this.categories.filter((c) => c.id != categoryId)
  }
}

export { ListItem }
