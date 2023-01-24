import { Link } from 'react-router-dom'

export const Login = () => {
  return     (
    <>
      <h1>Esse é o login</h1>
  
      <Link style={{ color: 'red' }} to='/'>Voltar para a Home</Link>
    </>
  )
}
