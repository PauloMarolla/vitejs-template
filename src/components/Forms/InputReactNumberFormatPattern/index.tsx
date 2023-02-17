import { FormControl, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { TinputMaskKeys } from '~/utils/mask'
import { PatternFormat } from 'react-number-format'
import { useMask } from './utils'

type InputProps = {
  name: string
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys
}


export const InputReactNumberFormatPattern = ({ name, label, mask }: InputProps) => {

  const { control } = useFormContext()

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
              />
            ) : (
              <TextField
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                helperText={error?.message}
                error={Boolean(error)}
                label={label}
              />
            )}
           
          </>
        
        )}
      />
    </FormControl>
  )
}
