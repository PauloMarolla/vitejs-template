import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Controller } from 'react-hook-form'
import { TinputMaskKeys } from '~/utils/mask'
import { PatternFormat } from 'react-number-format'

type InputProps = {
  name: string
  control: any
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys
}

export const InputV2 = ({ name, label, control }: InputProps) => {

  return (
    <FormControl variant='outlined' >
      <InputLabel className='mText'>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          
          <PatternFormat 
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            // allowEmptyFormatting
            format={field.value.trim().length < 14 ? '###.###.###-##' : '##.###.###/####-##'}
            label={label}
            customInput={OutlinedInput}
          />
       
        )}
      />
      {/* <OutlinedInput label='label' /> */}
        
    </FormControl>
  )
}
