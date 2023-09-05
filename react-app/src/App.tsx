import {useReducer} from "react";
import tasksReducer from "./state-management/reducers/tasksReducer.ts";
import TasksContext from "./state-management/contexts/tasksContext.ts";
import TaskList from "./state-management/TaskList.tsx";
import NavBar from "./state-management/NavBar.tsx";
import AuthProvider from "./state-management/AuthProvider.tsx";

const App = () => {
    const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
    return (
        <AuthProvider>
        <TasksContext.Provider value={{tasks, dispatch: tasksDispatch}}>
            <NavBar />
            <TaskList />
        </TasksContext.Provider>
        </AuthProvider>
    );
};

export default App;
