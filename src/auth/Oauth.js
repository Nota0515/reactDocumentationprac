import { useContext , useState , createContext } from "react";

const AuthContext = createContext();

export  const useAuth = () => useContext(authContext);

export const AuthContextProvider = ({childrens}) => {
    let [user , setUser] = useState(null);
    <AuthContext.Provider value={{user , setUser}} >
        {childrens}
    </AuthContext.Provider>
}