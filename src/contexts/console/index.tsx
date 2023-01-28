import { createContext, useContext } from 'react'
import { IConsoleContext, IConsoleProvider } from './types'

const ConsoleContext = createContext({} as IConsoleContext)

export const ConsoleProvider = ({ children }: IConsoleProvider) => {

  console.log('rodou', process.env.TESTE)

  return (
    <ConsoleContext.Provider 
      value={{}}>
      {children}
    </ConsoleContext.Provider>
  )
}

export const useConsole = () => useContext(ConsoleContext)
