import {useReducer} from "react";
import tasksReducer from "./state-management/reducers/tasksReducer.ts";
import TasksContext from "./state-management/contexts/tasksContext.ts";
import TaskList from "./state-management/TaskList.tsx";
import NavBar from "./state-management/NavBar.tsx";
import authReducer from "./state-management/reducers/authReducer.ts";
import AuthContext from "./state-management/contexts/authContext.ts";

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
