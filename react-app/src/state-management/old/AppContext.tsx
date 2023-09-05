import {useReducer} from "react";
import tasksReducer from "../reducers/tasksReducer.ts";
import TasksContext from "../contexts/tasksContext.ts";
import TaskList from "../TaskList.tsx";
import NavBar from "../NavBar.tsx";
import authReducer from "../reducers/authReducer.ts";
import AuthContext from "../contexts/authContext.ts";

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
