import { useParams } from 'react-router-dom'


export const User = () => {

  const params = useParams()

  return (
    <>
      <h1>Esse é o id {params.id}</h1>
    </>
  )
}
