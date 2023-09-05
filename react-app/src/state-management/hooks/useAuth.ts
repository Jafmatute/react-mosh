import {useContext} from "react";
import AuthContext from "../contexts/authContext.ts";

const useAuth = () => useContext(AuthContext);

export default useAuth;