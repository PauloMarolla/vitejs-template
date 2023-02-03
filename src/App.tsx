import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import { ConsoleProvider, CountryProvider } from './contexts'
import { Home, Login, User, Country } from './pages'
import * as Sentry from '@sentry/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

          <Route path='countries' element={<CountryProvider><Outlet /></CountryProvider>}>
            <Route index element={<Country />} />
            {/* <Route path=':id' element={<User />} /> */}
          </Route>

          <Route path='*' element={<h1>Desculpe, nao encontramos essa rota</h1>} />
        </Routes>
      </BrowserRouter>
      <button onClick={() => {
        throw Error('uuuuu')
      }}>Break app</button>
      <ToastContainer />
    </>
  )
}

export default Sentry.withProfiler(App)
