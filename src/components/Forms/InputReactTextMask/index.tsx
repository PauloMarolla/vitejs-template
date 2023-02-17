import { FormControl, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { TinputMaskKeys } from '~/utils/mask'
import { setMask } from './utils'
import MaskedInput from 'react-text-mask'

type InputProps = {
  name: string
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys
}

export const InputReactTextMask = ({ name, mask, errorMessage, label }: InputProps) => {

  const { control } = useFormContext()

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
                  guide={false}
                  mask={setMask(field.value, mask)}
                  value={field.value}
                  onChange={e => field.onChange(e.target.value)}
                  onBlur={field.onBlur}
                  ref={ref => {
                    field.ref(ref ? ref.inputElement : null)
                  }}
                  render={(innerRef, props) => (
                    <TextField
                      label={label}
                      error={Boolean(errorMessage)}
                      helperText={errorMessage}
                      inputRef={innerRef}
                      {...props}
                    />
                  )}
                />
              ) : (
                <TextField
                  {...field}
                  label={label}
                  error={Boolean(errorMessage)}
                  helperText={errorMessage}
                />
              )
            }
          </>
        )}
      />
        
    </FormControl>
  )
}
