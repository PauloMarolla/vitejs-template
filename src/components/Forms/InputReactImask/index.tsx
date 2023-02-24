import { InputHTMLAttributes, useState } from 'react'
import { FormControl, IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { TinputMaskKeys } from '~/utils/mask'
import { IMaskMixin } from 'react-imask'
import { useMask } from './utils'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type InputProps = InputHTMLAttributes<HTMLInputElement> & TextFieldProps & {
  name: string
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys,
  type?: 'text' | 'password'
}

const CustomMaskedInput = IMaskMixin((props: any) => {

  return  (
    <TextField
      {...props}
      InputLabelProps={{ shrink: props.val ? true : undefined }}
      inputRef={props.inputRef}
    />
  )
})


export const InputReactImask = ({ name, mask, label, type = 'text', ...rest }: InputProps) => {

  const { control } = useFormContext()
  const [showPassowrd, setShowPassword] = useState(false)

  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <>
            {mask ? (
              <CustomMaskedInput
                mask={useMask(mask)}
                type={showPassowrd ? 'text'  : type}
                {...rest}
                {...field}
                onAccept={(value: string) => {
                  field.onChange(value)
                  field.onBlur()
                }}
                val={field.value}
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
            ) : (
              <TextField
                {...rest}
                {...field}
                type={showPassowrd ? 'text'  : type}
                label={label}
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
            )}
          </>
          

        )}
      />
        
    </FormControl>
  )
}
