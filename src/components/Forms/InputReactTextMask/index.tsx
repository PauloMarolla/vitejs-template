import { InputHTMLAttributes, useState } from 'react'
import { FormControl, TextField, IconButton, InputAdornment, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { TinputMaskKeys } from '~/utils/mask'
import { setMask } from './utils'
import MaskedInput from 'react-text-mask'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type InputProps = InputHTMLAttributes<HTMLInputElement> & TextFieldProps & {
  name: string
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys,
  type?: 'text' | 'password'
}

export const InputReactTextMask = ({ name, mask, errorMessage, label, type, ...rest }: InputProps) => {

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
            {
              mask ? (
                <MaskedInput
                  {...rest}
                  guide={false}
                  mask={setMask(field.value, mask)}
                  value={field.value}
                  onChange={e => field.onChange(e.target.value)}
                  onBlur={field.onBlur}
                  ref={ref => {
                    field.ref(ref ? ref.inputElement : null)
                  }}
                  type={showPassowrd ? 'text'  : type}
                  render={(innerRef, props) => (
                    <TextField
                      {...props}
                      label={label}
                      error={Boolean(errorMessage)}
                      helperText={errorMessage}
                      inputRef={innerRef}
                      InputLabelProps={{ shrink: field.value ? true : undefined }}
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
                      {...props}
                    />
                  )}
                />
              ) : (
                <TextField
                  {...rest}
                  {...field}
                  label={label}
                  error={Boolean(errorMessage)}
                  helperText={errorMessage}
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
              )
            }
          </>
        )}
      />
        
    </FormControl>
  )
}
