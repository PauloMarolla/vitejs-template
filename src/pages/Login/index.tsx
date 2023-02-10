import { Link } from 'react-router-dom'
import { Input } from '~/components'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

type LoginFormData = {
  email: string;
  password: string;
};

export const Login = () => {

  const schema = yup.object({                     
    // email: yup.number(),
    // password: yup.string().required('É obrigatorio'),

  }).required()

  const { handleSubmit, control, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  })

  return(     
    <>
      <h1>Esse é o login</h1>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input control={control} error={errors.email?.message} name='email' />
        <Input control={control} error={errors.password?.message} name='password' />
        <button>Enviar</button>
      </form>
      
  
      <Link style={{ color: 'red' }} to='/'>Voltar para a Home</Link>
    </>
  )
}
