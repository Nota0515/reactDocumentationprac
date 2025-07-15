import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from '@/context/Oauth'
import axios from "axios";

const GoogleLoginBtn = () => {

    const { setUser } = useAuth();
    const login = useGoogleLogin({
        onSuccess : async tokenRespons => {
            console.log(tokenRespons)
            const data = axios.get("https://www.googleapis.com/oauth2/v3/userinfo" , 
                {headers : `Bearer ${tokenRespons.access_token}`},
            )

            setUser(data);
        },
        onError : () => console.error("error in googleauth hook maybe"),
    })

    return (
        <button onClick={() => login()} className=' flex items-center gap-2 bg-white p-2 rounded-xl'>
            <FcGoogle />Login with Goggle
        </button>
    )
}

export default GoogleLoginBtn
