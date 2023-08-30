import {useQuery} from "@tanstack/react-query";
import axios from "axios";

interface Todo {
userId: number;
id: number;
title: string;
complete: boolean;

}

const TodoList = () => {

    const fetchTodos = () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then(rs=>rs.data);

    const {data: todos, error, isLoading} = useQuery<Todo[], Error>({
        queryKey:["todos"],
        queryFn: fetchTodos
    })

    if(isLoading) return <p>Loading....</p>

    if(error) return <p>{error.message}</p>;


    return (
        <ul className="list-group">
            {todos?.map((todo) => <li className="list-group-item" key={todo.id}> {todo.title}</li> )}
        </ul>
    )
}
export default TodoList;