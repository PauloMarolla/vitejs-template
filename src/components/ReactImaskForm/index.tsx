import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputReactImask } from '../Forms/InputReactImask'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


interface ReactImaskData {
  cep: string,
  cnpj: string,
  cpf: string,
  cpfCnpj: string,
  phone: string,
  password: string,
  noMask: string,
}

export const ReactImaskForm = () => {
  
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

  const methods = useForm<ReactImaskData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    methods.setValue('cep', '13503000')
  }, [])

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <h2 style={styles.title}>React-Imask</h2>
        <InputReactImask mask='cep' label='CEP' name='cep' />
        <InputReactImask mask='cnpj' label='CNPJ' name='cnpj' />
        <InputReactImask mask='cpf' label='CPF' name='cpf' />
        <InputReactImask mask='cpfCnpj' label='CPF/CNPJ' name='cpfCnpj' />
        <InputReactImask mask='phone' label='Telefone' name='phone' />
        <InputReactImask autoComplete='on' type='password' label='Senha' name='password' />
        <InputReactImask label='Sem Mascará' name='noMask' />
        <button style={styles.button}>Enviar</button>
      </form>
    </FormProvider>
  )
}
