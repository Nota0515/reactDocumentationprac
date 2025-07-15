import { useAuth } from "@/context/Oauth"
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
    const {user} = useAuth();
  return user ? <Outlet/> : <Navigate to= '/login' replace />
}

export default PrivateRoute
