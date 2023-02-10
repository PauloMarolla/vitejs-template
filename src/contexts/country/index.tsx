import { useQuery } from '@apollo/client'
import { createContext, useContext, useState } from 'react'
import { ICountryContext, ICountryProvider, ICountries, IQueryCountries, IContinents } from './types'
import { toast } from 'react-toastify'
import { GET_COUNTRIES } from './query'

const CountryContext = createContext({} as ICountryContext)

export const CountryProvider = ({ children }: ICountryProvider) => {
  const [countries, setCountries] = useState<ICountries[]>([])
  const [continents, setContinents] = useState<IContinents[]>([])

  const { loading } = useQuery<IQueryCountries>(GET_COUNTRIES, {
    variables: {
      code: 'BR',
    },
    onCompleted: (data) => {
      setCountries(data.countries)
      setContinents(data.continents)
    },
    onError(error) {
      console.log(error.stack)
      toast.error(error.message)
    },
  })

  return (
    <CountryContext.Provider
      value={{ 
        countries, 
        setCountries, 
        continents, 
        setContinents, 
        loading 
      }}>
      {children}
    </CountryContext.Provider>
  )
}

export const useCountry = () => useContext(CountryContext)
