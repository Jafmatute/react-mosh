import {useEffect} from "react";

const App = () => {

    const connect = () => console.log("Connected");
    const disconnect = () => console.log("Disconnected");

    useEffect(() => {
        connect();

        return () => disconnect();

    }, []);

    return (
        <div>
        </div>
    );
};

export default App;
