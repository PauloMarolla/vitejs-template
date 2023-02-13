import { FormControl, InputLabel, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { TinputMaskKeys } from '~/utils/mask'
import MaskedInput from 'react-text-mask'

type InputProps = {
  name: string
  control: any
  errorMessage?: string | null,
  label?: string,
  mask?: TinputMaskKeys
}

export const InputV2 = ({ name, label, control }: InputProps) => {

  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <MaskedInput
            placeholder='Enter a phone number'
            guide={false}
            mask={field.value.length > 14 ? ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/,/\d/,'-', /\d/, /\d/, /\d/, /\d/] : ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/, /\d/]}
            {...field}
            render={(ref, props) => 
              <TextField label={label} inputRef={ref} {...props} ref={field.ref} />
            }
          />
       
        )}
      />
      {/* <OutlinedInput label='label' /> */}
        
    </FormControl>
  )
}
