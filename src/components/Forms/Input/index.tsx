import { FormControl, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { TinputMaskKeys } from '~/utils/mask'
import { PatternFormat } from 'react-number-format'
import { forwardRef } from 'react'

type InputProps = {
  name: string
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys
}


const NumberFormatCustom = forwardRef(function NumberFormatCustom(props: any, ref) {
  const { onChange, ...other } = props

  return (
    <PatternFormat
      {...other}
      format='###.###.###-##'
      getInputRef={ref}
      mask='_'
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
    />
  )
})

export const Input = ({ name, label }: InputProps) => {

  const { control } = useFormContext()

  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field, fieldState: { error } }) => (
          <TextField
            id={name}
            label={label}
            error={Boolean(error)}
            helperText={error?.message}
            {...field}
            InputProps={{ inputComponent: NumberFormatCustom }} 
          />
        )}
      />
        
    </FormControl>
  )
}
