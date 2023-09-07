import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{background: "#f0f0f0", marginBottom: "1rem"}}>
            <div className="container-fluid">
                <a className="navbar-brand">My app</a>
                <div className="collapsed navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/*<NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : ''} />*/}
                            <NavLink to="/" className="nav-link">Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="users">Users</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
