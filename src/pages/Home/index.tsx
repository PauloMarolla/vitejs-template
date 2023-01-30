import { Link } from 'react-router-dom'
import { Teste, Teste2 } from '~/components'
import { useCounter } from '~/contexts'

export const Home = () => {

  const { counter, setCounter, resetCounter } = useCounter()

  return (
    <>
      <h1>Essa é Home</h1>

      <Teste />

      <button onClick={() => setCounter(counter + 1)} >Acrescentar {counter}</button>
      <button onClick={resetCounter} >Resetar Counter</button>

      <Teste2 />
      
      <Link style={{ color: 'red' }} to='/login'>Vá para o login</Link>
    </>
  )
}
