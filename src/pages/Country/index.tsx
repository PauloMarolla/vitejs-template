import { useRef } from 'react'
import { useCountry } from '~/contexts'

export const Country = () => {

  const { countries, setCountries, continents, setContinents, loading } = useCountry()
  const continentyInputRef = useRef<null | HTMLInputElement>(null)
  
  function onkeypress(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      setContinents([{ name: continentyInputRef?.current?.value ?? '' }, ...continents])
    }
  }

  if(loading) return <div>Loading...</div>

  return (
    <>
      <div style={{ display: 'flex', gap: '.4rem' }}>
        <ul>
          <h1>Listagem de paises</h1>
          <button onClick={() => setCountries([])}>Limpar paises</button>
          {countries?.map(({ name }) => {
            return <li key={name}>{name}</li>
          })}
        </ul>
        <ul>
          <h1>Listagem de continentes</h1>
          <button onClick={() => setContinents([])}>Limpar continents</button>
          <input onKeyPress={onkeypress} ref={continentyInputRef} type='text' />
          {continents?.map(({ name }) => {
            return <li key={name}>{name}</li>
          })}
        </ul>
      </div>
    </>
  )
}
