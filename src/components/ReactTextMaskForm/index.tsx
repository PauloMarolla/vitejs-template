import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputReactTextMask } from '../Forms'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


interface ReactTextMaskData {
  cep: string,
  cnpj: string,
  cpf: string,
  cpfCnpj: string,
  phone: string,
  password: string,
  noMask: string,
}

export const ReactTextMaskForm = () => {
  
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
    password: yup.string(),
    noMask: yup.string(),
  }).required()

  const methods = useForm<ReactTextMaskData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    methods.setValue('cep', '13503000')
  }, [])


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <h2 style={styles.title}>React-Text-Mask</h2>
        <InputReactTextMask mask='cep' label='CEP' name='cep' />
        <InputReactTextMask mask='cnpj' label='CNPJ' name='cnpj' />
        <InputReactTextMask mask='cpf' label='CPF' name='cpf' />
        <InputReactTextMask mask='cpfCnpj' label='CPF/CNPJ' name='cpfCnpj' />
        <InputReactTextMask mask='phone' label='Telefone' name='phone' />
        <InputReactTextMask autoComplete='on' type='password' label='Senha' name='password' />
        <InputReactTextMask label='Sem Mascará' name='noMask' />
        <button style={styles.button}>Enviar</button>
      </form>
    </FormProvider>
  )
}
