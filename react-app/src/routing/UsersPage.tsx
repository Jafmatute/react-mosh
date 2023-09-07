import UserList from "./UserList.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
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
