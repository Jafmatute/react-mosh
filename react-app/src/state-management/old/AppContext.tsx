import {useReducer} from "react";
import tasksReducer from "../tasks/tasksReducer.ts";
import TasksContext from "../tasks/tasksContext.ts";
import TaskList from "../tasks/TaskList.tsx";
import NavBar from "../NavBar.tsx";
import authReducer from "../auth/authReducer.ts";
import AuthContext from "../auth/authContext.ts";

const App = () => {
    const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
    const [user, authDispatch] = useReducer(authReducer, '');
    return (
        <AuthContext.Provider value={{user, dispatch: authDispatch}}>
        <TasksContext.Provider value={{tasks, dispatch: tasksDispatch}}>
            <NavBar />
            <TaskList />
        </TasksContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
