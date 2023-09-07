import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{background: "#f0f0f0", marginBottom: "1rem"}}>
            <div className="container-fluid">
                <a className="navbar-brand">My app</a>
                <div className="collapsed navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="users">Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
