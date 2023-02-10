import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

type InputProps = {
  name: string
  control: any
  error?: string | null
}

export const Input = ({ name, error, control, ...rest }: InputProps) => {

  return (
    <>
      <Controller 
        name={name} 
        control={control} 
        render={({ field }) => (
          <TextField
            {...field}
            {...rest}
            error={Boolean(error)}
            helperText={error}
            value={field?.value ?? ''}
          >
            <InputMask mask='(0)999 999 99 99' maskChar=' ' />
          </TextField>
        )}
      />

      {/* {error && <p>{error}</p>} */}
    </>

    
  )
}
