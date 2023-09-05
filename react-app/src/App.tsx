import TaskList from "./state-management/TaskList.tsx";
import NavBar from "./state-management/NavBar.tsx";
import AuthProvider from "./state-management/AuthProvider.tsx";
import TasksProvider from "./state-management/TasksProvider.tsx";

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
