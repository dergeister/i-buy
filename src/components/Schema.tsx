import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().required()
  })
  .required()

type FormData = yup.InferType<typeof schema>

const Schema = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className="input-field"
        {...register('name')}
      />
      {errors.name && <p className="error-msg">{errors.name.message}</p>}
      <Button
        type="submit"
        className="submit"
        variant="contained"
        size="large"
      >
        Submit
      </Button>
    </form>
  )
}

export { Schema }
