import {useReducer} from "react";
import tasksReducer from "./state-management/reducers/tasksReducer.ts";
import TasksContext from "./state-management/contexts/tasksContext.ts";
import TaskList from "./state-management/TaskList.tsx";
import NavBar from "./state-management/NavBar.tsx";

const App = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <TasksContext.Provider value={{tasks, dispatch}}>
            <NavBar />
            <TaskList />
        </TasksContext.Provider>
    );
};

export default App;
