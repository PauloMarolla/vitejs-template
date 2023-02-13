import { Link } from 'react-router-dom'
import { Input, InputV2 } from '~/components'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

type LoginFormData = {
  email: string;
  password: string;
};

export const Login = () => {

  const schema = yup.object({                     
    email: yup.string(),
    password: yup.string().required(),

  }).required()

  const { handleSubmit, control, formState: { errors }, setValue } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  })

  // useEffect(() =>{
  //   setValue('password', '32775681000156')
  // }, [])

  return(     
    <>
      <h1>Esse é o login</h1>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputV2 control={control} errorMessage={errors.email?.message} name='email' />
        <InputV2 label='Senha' control={control} errorMessage={errors.password?.message} name='password' />
        <button>Enviar</button>
      </form>
      
  
      <Link style={{ color: 'red' }} to='/'>Voltar para a Home</Link>
    </>
  )
}
