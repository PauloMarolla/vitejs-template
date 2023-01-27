import { Link } from 'react-router-dom'
import { useToggle } from '~/hooks'
import { translateStatus } from '~/utils'

export const Login = () => {
  const { isTrue, toggle } = useToggle(false)

  return     (
    <>
      <h1>Esse é o login</h1>

      <h4>Renderiza Status {translateStatus('success')}</h4>

      <h4>Mude o botão</h4>
      <button onClick={toggle} >{isTrue ? 'Sim' : 'Não'}</button>
      
  
      <Link style={{ color: 'red' }} to='/'>Voltar para a Home</Link>
    </>
  )
}
