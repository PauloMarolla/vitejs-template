import { Link } from 'react-router-dom'
import { ReactInputMaskForm } from '~/components/ReactInputMaskForm'
import { ReactTextMaskForm } from '~/components/ReactTextMaskForm'
import React from 'react'
import { ReactNumberFormatForm } from '~/components/ReactNumberFormatForm'
import { ReactImaskForm } from '~/components/ReactImaskForm'

export const Login = () => {

  const formStyles: React.CSSProperties = {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
  
  return(     
    <>
      <h1>Esse é o login</h1>
      <div style={formStyles}>
        < ReactTextMaskForm />
        < ReactInputMaskForm />
        < ReactNumberFormatForm />
        < ReactImaskForm />
      </div>
   
  
      <Link style={{ color: 'red' }} to='/'>Voltar para a Home</Link>
    </>
  )
}
