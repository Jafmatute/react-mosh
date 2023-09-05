import {useContext} from "react";
import AuthContext from "./contexts/authContext.ts";

const LoginStatus = () => {


    const {user, dispatch} =useContext(AuthContext);

    if (user)
        return(
            <>
            <div>
                <span className="mx-2">{user}</span>
                <a href="#" onClick={()=> dispatch({type:"LOGOUT" })}>Logout</a>
            </div>
            </>
        );

    return(
        <div>
            <a href="#" onClick={()=> dispatch({type:"LOGIN", username:"Josue flores"})} >Login</a>
        </div>
    )
}
export default LoginStatus;
