import {Task, TaskAction} from "../reducers/tasksReducer.ts";
import React, {Dispatch} from "react";

interface TasksContextType {
    tasks:Task[]
    dispatch:Dispatch<TaskAction>
}

const tasksContext =React.createContext<TasksContextType>({} as TasksContextType);

export default tasksContext;