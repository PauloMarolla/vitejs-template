import { createContext, useContext } from 'react'
import { useQuery, gql } from '@apollo/client'
import { IConsoleContext, IConsoleProvider } from './types'

const ConsoleContext = createContext({} as IConsoleContext)

export const ConsoleProvider = ({ children }: IConsoleProvider) => {

  const GET_COUNTRIES = gql`
    query Query {
      country(code: "BR") {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  `

  const { data } = useQuery<any>(GET_COUNTRIES)

  console.log(data)

  return (
    <ConsoleContext.Provider 
      value={{}}>
      {children}
    </ConsoleContext.Provider>
  )
}

export const useConsole = () => useContext(ConsoleContext)
