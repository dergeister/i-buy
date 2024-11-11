import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Input } from '@headlessui/react'
import { useGroceryItem } from '../../hooks/useGroceryItem'
import { GroceryItem } from '../../models/GroceryItem'

const schema = yup
  .object({
    name: yup.string().required('Required')
  })
  .required()

type GroceryItemFormData = yup.InferType<typeof schema>

const GroceryItemForm = () => {
  // const { postGroceryItems } = useGroceryItem()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<GroceryItemFormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: GroceryItemFormData) => {
    // postGroceryItems(
    //   new GroceryItem({
    //     name: data.name
    //   })
    // ).then(() => {
    //   reset({ name: '' })
    //   onPostGroceryItem()
    // })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-md rounded-lg p-5 bg-white"
    >
      <div className="columns-1">
        <p className="text-3xl font-bold">New Item</p>
      </div>
      <div className="columns-1 pt-2">
        <label htmlFor="name">
          <span className="required">Name</span>
          <Input
            className="border data-[hover]:shadow data-[focus]:bg-gray-100 w-full"
            {...register('name')}
          />
          {errors.name && <small className="text-red-400">{errors.name.message}</small>}
        </label>
      </div>
      <div className="text-right pt-2">
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export { GroceryItemForm }
