import { Routes, Route } from 'react-router-dom'
import Home from "@/pages/Home.jsx"
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import { AuthContextProvider } from '@/context/Oauth'
import PrivateRoute from '@/components/PrivateRoute'

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center h-[100dvh]'>
        <AuthContextProvider>
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path='/' element={<Home/>} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  )
}

export default App
