import {useEffect} from "react";

const AppEffectClean = () => {

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

export default AppEffectClean;
