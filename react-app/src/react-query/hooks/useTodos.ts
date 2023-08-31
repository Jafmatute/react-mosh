import axios from "axios";
import {useQuery} from "@tanstack/react-query";


 interface Todo {
    userId: number;
    id: number;
    title: string;
    complete: boolean;

}
const useTodos = () => {

    const fetchTodos = () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then(rs=>rs.data);

    return useQuery<Todo[], Error>({
        queryKey:["todos"],
        queryFn: fetchTodos,
        staleTime: 10*1000
    })
}

export default useTodos;