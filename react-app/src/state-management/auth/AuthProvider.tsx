import {ReactNode, useReducer} from "react";
import authReducer from "./authReducer.ts";
import AuthContext from "./authContext.ts";

interface Props{
    children: ReactNode
}
const AuthProvider = ({children}:Props) => {
    const [user, dispatch] = useReducer(authReducer, '');
    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
