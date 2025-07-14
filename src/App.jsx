import {Routes , Route} from 'react-router'

import  Home  from "@/pages/Home.jsx"
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center h-[100dvh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App
