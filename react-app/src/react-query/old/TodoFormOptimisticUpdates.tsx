import {useRef} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Todo} from "../hooks/useTodos.ts";
import axios from "axios";

interface AddTodoContext {
    previousTodos: [];
}

const TodoForm = () => {

    const queryClient = useQueryClient();

    const ref = useRef<HTMLInputElement>(null);

    const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({

        mutationFn:(todo:Todo) => axios.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
            .then(rsp=> rsp.data),

        onMutate: (newTodo: Todo) => {

            const previousTodos = queryClient.getQueryData<Todo[]>(['todos']) || [];

            queryClient.setQueryData<Todo[]>(['todos'], todos => [
                newTodo, ...(todos || [])
            ]);

            if(ref.current) ref.current.value = '';

            return {previousTodos};
        },

        onSuccess: (saveTodo:Todo,newTodo:Todo) => {
            queryClient.setQueryData<Todo[]>(['todos'], todos =>todos?.map(todo=>
            todo === newTodo ? saveTodo : todo));
        },

        onError: (context:AddTodoContext) => {

            if(!context) return;
            queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
        },
    });


    return (
        <>
            {addTodo.error &&  <div className="alert-danger">{addTodo.error.message}</div>}
            <form className="row mb-3" onSubmit={(evt)=> {
                evt.preventDefault();
                if(ref.current && ref.current.value)
                    addTodo.mutate({
                        userId: 1,
                        id: 0,
                        title: ref.current?.value,
                        complete: false
                    })
            }}>
                <div className="col">
                    <input ref={ref} type='text' className="form-control" />
                </div>
                <div className="col">
                    <button disabled={addTodo.isLoading} className="btn btn-primary">{addTodo.isLoading ? 'Adding....' : 'Add'}</button>
                </div>
            </form>
        </>
    )
}
export default TodoForm;
