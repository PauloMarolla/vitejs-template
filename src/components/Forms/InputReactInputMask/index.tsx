import { FormControl, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import ReactInputMask from 'react-input-mask-paulo'
import { TinputMaskKeys } from '~/utils/mask'
import { useMask } from './utils'

type InputProps = {
  name: string
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys
}

export const InputReactInputMask = ({ name, mask, label }: InputProps) => {

  const { control } = useFormContext()

  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field, fieldState: { error } }) => (
          <ReactInputMask
            mask={useMask(field.value, mask)}
            alwaysShowMask={false}
            maskPlaceholder=''
            {...field}
          >
            <TextField
              helperText={error?.message} 
              error={Boolean(error)}
              label={label}
    
            />  
          </ReactInputMask>
        )}
      />
        
    </FormControl>
  )
}
