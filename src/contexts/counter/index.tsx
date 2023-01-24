import { createContext, useCallback, useContext, useState } from 'react'
import { ICounterContext, ICounterProvider } from './types'

const CounterContext = createContext({} as ICounterContext)

export const CounterProvider = ({ children }: ICounterProvider) => {

  const [counter, setCounter] = useState(0)

  const resetCounter = useCallback(() => {
    setCounter(0)
  }, [])


  return (
    <CounterContext.Provider 
      value={{ counter, setCounter, resetCounter }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => useContext(CounterContext)
