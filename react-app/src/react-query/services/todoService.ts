import APIClient from "./apiClient.ts";

 export interface Todo {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
}

export default new APIClient<Todo>('/todos');