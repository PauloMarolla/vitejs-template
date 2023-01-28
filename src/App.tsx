import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import { ConsoleProvider } from './contexts'
import { Home, Login, User } from './pages'
import * as Sentry from '@sentry/react'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />

          <Route path='users' element={<ConsoleProvider><Outlet /></ConsoleProvider>}>
            <Route index element={<h1>user</h1>} />
            <Route path='account' element={<h1>account</h1>} />
            <Route path=':id' element={<User />} />
          </Route>

          <Route path='*' element={<h1>Desculpe, nao encontramos essa rota</h1>} />
        </Routes>
      </BrowserRouter>
      <button onClick={() => {
        throw Error('aaaa')
      }}>Break app</button>
    </>
  )
}

export default Sentry.withProfiler(App)
