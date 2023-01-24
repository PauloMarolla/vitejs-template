import { Link } from 'react-router-dom'
import { Teste } from '~/components'
import { useCounter } from '~/contexts/counter'

export const Home = () => {

  const { counter, setCounter, resetCounter } = useCounter()

  return (
    <>
      <h1>Essa é Home</h1>

      <Teste />

      <button onClick={() => setCounter(counter + 1)} >Acrescentar {counter}</button>
      <button onClick={resetCounter} >Resetar Counter</button>
      
      <Link style={{ color: 'red' }} to='/login'>Vá para o login</Link>
    </>
  )
}

