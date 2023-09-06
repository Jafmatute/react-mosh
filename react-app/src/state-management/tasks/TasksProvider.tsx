import {ReactNode, useReducer} from "react";
import TasksContext from "./tasksContext.ts";
import tasksReducer from "./tasksReducer.ts";

interface Props {
    children: ReactNode
}
const TasksProvider = ({children}:Props) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    return (
        <TasksContext.Provider value={{tasks, dispatch}}>
            {children}
        </TasksContext.Provider>
    )
}
export default TasksProvider;
