import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputReactNumberFormatPattern } from '../Forms'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


interface ReactNumberFormatData {
  cep: string,
  cnpj: string,
  cpf: string,
  cpfCnpj: string,
  phone: string,
  password: string,
  noMask: string,
}

export const ReactNumberFormatForm = () => {
  
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

  const methods = useForm<ReactNumberFormatData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    methods.setValue('cep', '13503000')
  }, [])


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <h2 style={styles.title}>React-Number-Format</h2>
        <InputReactNumberFormatPattern mask='cep' label='CEP' name='cep' />
        <InputReactNumberFormatPattern mask='cnpj' label='CNPJ' name='cnpj' />
        <InputReactNumberFormatPattern mask='cpf' label='CPF' name='cpf' />
        <InputReactNumberFormatPattern mask='cpfCnpj' label='CPF/CNPJ' name='cpfCnpj' />
        <InputReactNumberFormatPattern mask='phone' label='Telefone' name='phone' />
        <InputReactNumberFormatPattern autoComplete='on' type='password' label='Senha' name='password' />
        <InputReactNumberFormatPattern label='Sem MascarĂ¡' name='noMask' />
        <button style={styles.button}>Enviar</button>
      </form>
    </FormProvider>
  )
}
