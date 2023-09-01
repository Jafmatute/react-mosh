import {useRef} from "react";
import useAddTodo from "./hooks/useAddTodo.ts";

const TodoForm = () => {


    const ref = useRef<HTMLInputElement>(null);

    const addTodo = useAddTodo(()=> {
        if(ref.current) ref.current.value = '';
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
                    <button className="btn btn-primary">
                        Add
                    </button>
                </div>
            </form>
        </>
    )
}
export default TodoForm;
