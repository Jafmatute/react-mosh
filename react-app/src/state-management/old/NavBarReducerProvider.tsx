import LoginStatus from "../auth/LoginStatus.tsx";
import {useContext} from "react";
import TasksContext from "../tasks/tasksContext.ts";

const NavBar = () => {
    const {tasks} = useContext(TasksContext);
    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{tasks.length}</span>
            <LoginStatus/>
        </nav>
    )
}
export default NavBar
