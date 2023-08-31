import {useRef} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Todo} from "./hooks/useTodos.ts";
import axios from "axios";

const TodoForm = () => {

    const queryClient = useQueryClient();

    const addTodo = useMutation({
        mutationFn:(todo:Todo) => axios.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
            .then(rsp=> rsp.data),
        onSuccess: (saveTodo) => {
            //APPROACH: Invalidating the cache
            // queryClient.invalidateQueries({
            //     queryKey:['todos']
            // })

            //APPROACH 2: Updating the data in the cache.
            queryClient.setQueryData<Todo[]>(['todos'], todos => [
                saveTodo, ...(todos || [])
            ]);
        }
    });

    const ref = useRef<HTMLInputElement>(null);

    return (
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
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}
export default TodoForm;
