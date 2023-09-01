import {useQuery} from "@tanstack/react-query";
import {CACHE_KEY_TODOS} from "../constants.ts";
import APIClient from "../services/apiClient.ts";


const apiClient = new APIClient<Todo>('/todos');

 export interface Todo {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
}

const useTodos = () => {

    return useQuery<Todo[], Error>({
        queryKey:CACHE_KEY_TODOS,
        queryFn: apiClient.getAll,
        staleTime: 10*1000
    })
}

export default useTodos;