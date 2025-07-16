import { Routes, Route } from 'react-router-dom'
import Home from "@/pages/Home.jsx"
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import PrivateRoute from '@/components/PrivateRoute'

const App = () => {
  return (
    <>
      <div className='flex justify-center bg-black items-center h-[100dvh]'>
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path='/' element={<Home/>} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
      </div>
    </>
  )
}

export default App
