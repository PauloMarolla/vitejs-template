export type ICounterContext = {
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  resetCounter: () => void
}

export type ICounterProvider = {
  children: React.ReactNode
}
