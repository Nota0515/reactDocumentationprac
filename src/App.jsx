import {Routes , Route} from 'react-router'
import './App.css'
import  Home  from "@/pages/Home.jsx"

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
