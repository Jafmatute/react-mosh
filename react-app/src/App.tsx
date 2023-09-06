import TaskList from "./state-management/tasks/TaskList.tsx";
import NavBar from "./state-management/NavBar.tsx";
import {AuthProvider}from "./state-management/auth";
import {TasksProvider} from "./state-management/tasks";

const App = () => {

    return (
        <AuthProvider>
        <TasksProvider>
            <NavBar />
            <TaskList />
        </TasksProvider>
        </AuthProvider>
    );
};

export default App;
