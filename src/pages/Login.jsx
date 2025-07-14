import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black '>
      <button onClick={()=>{console.log("butn is clicked")}} className=' flex items-center gap-2 bg-white p-2 rounded-xl'><FcGoogle />Login with Goggle</button>      
    </div>
  )
}

export default Login
