import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Todo} from "./useTodos.ts";
import axios from "axios";
import {CACHE_KEY_TODOS} from "../constants.ts";

interface AddTodoContext {
    previousTodos: [];
}

const useAddTodo = (onAdd:()=> void) => {

    const queryClient = useQueryClient();

    return  useMutation<Todo, Error, Todo, AddTodoContext>({

        mutationFn:(todo:Todo) => axios.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
            .then(rsp=> rsp.data),

        onMutate: (newTodo: Todo) => {

            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos=[] )=> [
                newTodo, ...todos
            ]);

            onAdd();

            return {previousTodos};
        },

        onSuccess: (saveTodo:Todo,newTodo:Todo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, todos =>todos?.map(todo=>
                todo === newTodo ? saveTodo : todo));
        },

        onError: (context:AddTodoContext) => {

            if(!context) return;
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
        },
    });

}

export default useAddTodo;