import {useContext} from "react";
import TasksContext from "./contexts/tasksContext.ts";
import AuthContext from "./contexts/authContext.ts";

const TaskList = () => {
const {tasks, dispatch} = useContext(TasksContext);
const {user} = useContext(AuthContext);
    return (
        <>
            <p>User: {user}</p>
            <button className="btn btn-primary my-3" onClick={()=> dispatch({type:"ADD", task:{
                id:Date.now(), title:"TASK " + Date.now()
                }})}>
                Add Task
            </button>
            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between">
                        <span className="flex-grow-1">{task.title}</span>
                        <button className="btn btn-outline-danger" onClick={()=> dispatch({type:"DELETE", taskId:task.id})}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default TaskList;
