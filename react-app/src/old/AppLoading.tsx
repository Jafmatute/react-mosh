import {useEffect, useState} from "react";
import axios, {CanceledError} from "axios";

interface User {
    id: number;
    name: string;
}

const AppLoading = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axios.get<User[]>("https://jsonplaceholder.typicode.com/users", {signal: controller.signal})
            .then(res => {
                setUsers(res.data)
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })
        // .finally(() => {
        // setLoading(false)
        //})

        return () => controller.abort();
    }, []);

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <ul>
                {users.map((user: User) => <li key={user.id}> {user.name}</li>)}
            </ul>
        </>
    );
};

export default AppLoading;
