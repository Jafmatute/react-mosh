import {useEffect, useState} from "react";
import axios, {CanceledError} from "axios";

interface User {
    id: number;
    name: string;
}

const AppCancellingFetch = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        axios.get<User[]>("https://jsonplaceholder.typicode.com/users", {signal: controller.signal})
            .then(res => setUsers(res.data))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)

            });

        return () => controller.abort();
    }, []);

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <ul>
                {users.map((user: User) => <li key={user.id}> {user.name}</li>)}
            </ul>
        </>
    );
};

export default AppCancellingFetch;
