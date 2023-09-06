import {useContext} from "react";
import TasksContext from "./tasksContext.ts";

const useTasks = () => useContext(TasksContext);

export default useTasks;