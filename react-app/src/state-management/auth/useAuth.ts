import {useContext} from "react";
import AuthContext from "./authContext.ts";

const useAuth = () => useContext(AuthContext);

export default useAuth;