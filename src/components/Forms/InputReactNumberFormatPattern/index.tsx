import { InputHTMLAttributes, useState } from 'react'
import { FormControl, TextField, InputAdornment, IconButton , TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { TinputMaskKeys } from '~/utils/mask'
import { PatternFormat } from 'react-number-format'
import { useMask } from './utils'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type InputProps = InputHTMLAttributes<HTMLInputElement> & TextFieldProps & {
  name: string
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys,
  type?: 'text' | 'password'
}


export const InputReactNumberFormatPattern = ({ name, label, mask, type = 'text', ...rest }: InputProps) => {

  const { control } = useFormContext()
  const [showPassowrd, setShowPassword] = useState(false)

  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            {mask ? (
              <PatternFormat
                {...rest as any}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onValueChange={(valueChange) => onChange(valueChange.formattedValue)}
                name={name}
                format={useMask(value, mask)}
                allowEmptyFormatting={false}
                helperText={error?.message}
                error={Boolean(error)}
                customInput={TextField}
                label={label}
                type={showPassowrd ? 'text'  : type}
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
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                helperText={error?.message}
                error={Boolean(error)}
                label={label}
                type={showPassowrd ? 'text'  : type}
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
