import NavBar from "./NavBar.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <div id='name'>
                <Outlet/>
            </div>
        </>
    )
}
export default Layout
