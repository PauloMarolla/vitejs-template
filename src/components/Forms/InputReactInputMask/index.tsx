import { InputHTMLAttributes, useState } from 'react'
import { FormControl, IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import ReactInputMask from '@marolla/react-input-mask'
import { TinputMaskKeys } from '~/utils/mask'
import { useMask } from './utils'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type InputProps = InputHTMLAttributes<HTMLInputElement> & TextFieldProps & {
  name: string
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys,
  type?: 'number' | 'text' | 'password'
}

export const InputReactInputMask = ({ name, mask, label, type = 'text', ...rest }: InputProps) => {

  const { control } = useFormContext()
  const [showPassowrd, setShowPassword] = useState(false)

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
            type={showPassowrd ? 'text'  : type}
            {...rest}
            {...field}
          >
            <TextField
              helperText={error?.message} 
              error={Boolean(error)}
              label={label}
              value={field.value}
              InputProps={{
                endAdornment: (
                  <>
                    {type === 'password' && (
                      <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPassword(!showPassowrd)}>
                          {showPassowrd ? <VisibilityOff /> : <Visibility /> }
                        </IconButton>
                      </InputAdornment>
                    )}
                  </>
                )
              }}
            />  
          </ReactInputMask>
        )}
      />
        
    </FormControl>
  )
}
