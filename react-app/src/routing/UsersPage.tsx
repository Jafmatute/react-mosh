import UserList from "./UserList.tsx";
import {Navigate, Outlet} from "react-router-dom";
import useAuth from "./hooks/useAuth.ts";

const UsersPage = () => {
    const {user} = useAuth();

    if (!user) return <Navigate to="/login"/>
    return (
        <div className="row">
            <div className="col">
                <UserList/>
            </div>
            <div className="col">
                <Outlet/>
            </div>
        </div>
    )
}
export default UsersPage
