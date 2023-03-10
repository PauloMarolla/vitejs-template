import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputReactInputMask } from '../Forms'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


interface ReactInputMaskData {
  cep: string,
  cnpj: string,
  cpf: string,
  cpfCnpj: string,
  phone: string,
  password: string,
  noMask: string,
}

export const ReactInputMaskForm = () => {
  
  const styles = {
    title: {
      paddingBottom: '1rem'
    },
    button: {
      display: 'block'
    }
  }

  const schema = yup.object({                     
    cep: yup.string(),
    cnpj: yup.string(),
    cpf: yup.string(),
    cpfCnpj: yup.string(),
    phone: yup.string(),
    noMask: yup.string(),
    password: yup.string(),
  }).required()

  const methods = useForm<ReactInputMaskData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    methods.setValue('cep', '13503000')
  }, [])


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <h2 style={styles.title}>React-Input-Mask</h2>
        <InputReactInputMask mask='cep' label='CEP' name='cep' />
        <InputReactInputMask mask='cnpj' label='CNPJ' name='cnpj' />
        <InputReactInputMask mask='cpf' label='CPF' name='cpf' />
        <InputReactInputMask mask='cpfCnpj' label='CPF/CNPJ' name='cpfCnpj' />
        <InputReactInputMask mask='phone' label='Telefone' name='phone' />
        <InputReactInputMask autoComplete='on' type='password' label='Senha' name='password' />
        <InputReactInputMask label='Sem MascarĂ¡' name='noMask' />
        <button style={styles.button}>Enviar</button>
      </form>
    </FormProvider>
  )
}
