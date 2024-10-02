import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().required('Required')
  })
  .required()

type FormData = yup.InferType<typeof schema>

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-md rounded-lg p-5 bg-white"
    >
      <div className="columns-1">
        <p className="text-3xl font-bold">Add Category</p>
      </div>
      <div className="columns-1 lg:columns-2 pt-2">
        <TextField
          label="Name"
          variant="standard"
          className="w-full"
          {...register('name')}
        />
        {errors.name && <small className="text-red-400">{errors.name.message}</small>}
      </div>
      <div className="text-right pt-2">
        <Button
          type="submit"
          className="submit"
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export { CategoryForm }
