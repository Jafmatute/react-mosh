import TaskList from "../tasks/TaskList.tsx";
import NavBar from "../NavBar.tsx";
import {AuthProvider} from "../auth";
import {TasksProvider} from "../tasks";

const App = () => {

    return (
        <AuthProvider>
            <TasksProvider>
                <NavBar/>
                <TaskList/>
            </TasksProvider>
        </AuthProvider>
    );
};

export default App;
