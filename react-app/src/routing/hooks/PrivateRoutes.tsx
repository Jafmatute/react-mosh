import useAuth from "./useAuth.ts";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = () => {
    const {user} = useAuth();

    if (!user) return <Navigate to="/login"/>

    return <Outlet/>;
}
export default PrivateRoutes
