import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import { ConsoleProvider } from './contexts'
import { Home, Login, User } from './pages'

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
    </>
  )
}

export default App
