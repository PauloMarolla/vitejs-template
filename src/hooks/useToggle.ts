import { useCallback, useState } from 'react'

export const useToggle = (initialState: boolean) => {
  const [isTrue, setIsTrue] = useState(initialState ?? false)

  const toggle = useCallback(() => {
    setIsTrue(!isTrue)
  }, [isTrue])

  return { isTrue, toggle, setIsTrue }
}
