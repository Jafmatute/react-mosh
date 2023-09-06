import {Task, TaskAction} from "./tasksReducer.ts";
import React, {Dispatch} from "react";

interface TasksContextType {
    tasks:Task[]
    dispatch:Dispatch<TaskAction>
}

const TasksContext =React.createContext<TasksContextType>({} as TasksContextType);

export default TasksContext;