import React, {Dispatch} from "react";
import {AuthAction} from "./authReducer.ts";

interface AuthContextType {
    user:string;
    dispatch: Dispatch<AuthAction>
}
const AuthContext =React.createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
