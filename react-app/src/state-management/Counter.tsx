import {useReducer} from "react";
import counterReducer from "./reducers/counterReducer.ts";

const Counter = () => {

    const [value, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            Counter ({value})
            <button className="btn btn-primary mx-1" onClick={()=> dispatch({type:"INCREMENT"})}>
                Increment
            </button>
            <button className="btn btn-danger" onClick={()=> dispatch({type:"RESET"})}>
                Reset
            </button>
        </div>
    )
}
export default Counter;
