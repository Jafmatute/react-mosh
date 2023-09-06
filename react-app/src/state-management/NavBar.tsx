import LoginStatus from "./auth/LoginStatus.tsx";
import useCounterStore from "./counter/store.ts";

const NavBar = () => {
    //const {counter} = useCounterStore(); //global state
    const counter = useCounterStore(s => s.counter);
    
    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{counter}</span>
            <LoginStatus/>
        </nav>
    )
}
export default NavBar
