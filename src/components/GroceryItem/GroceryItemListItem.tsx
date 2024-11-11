import { Button } from '@headlessui/react'
import { TrashIcon, PencilIcon } from '@heroicons/react/16/solid'

interface GroceryItemListItemProps {
  id: string
  name: string
}

const GroceryItemListItem = ({ id, name }: GroceryItemListItemProps) => {
  return (
    <li className="flex justify-between gap-4 my-2">
      <span>{name}</span>
      <div className="flex gap-2">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
          <PencilIcon className="size-4" />
        </Button>
        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">
          <TrashIcon className="size-4" />
        </Button>
      </div>
    </li>
  )
}

export { GroceryItemListItem }
