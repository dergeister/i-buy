import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField/TextField'

type FormValues = {
  name: string
}

const Test = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="form-container">
        <TextField
          className="input-field"
          {...register('name', {
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters'
            },
            maxLength: {
              value: 10,
              message: 'Name should be at most 10 characters'
            }
          })}
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
      </Box>
    </form>
  )
}

export { Test }
