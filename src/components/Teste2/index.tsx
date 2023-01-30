export const Teste2 = () => {
  return   (
    <button onClick={() => {
      throw Error('dentro do componente')
    }}>componente 2</button>
  )
}
