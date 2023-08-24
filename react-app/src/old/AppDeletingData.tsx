import {useEffect, useState} from "react";
import axios, {CanceledError} from "axios";

interface User {
    id: number;
    name: string;
}

const AppDeletingData = () => {
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

        return () => controller.abort();
    }, []);

    const deleteUser = (user: User) => {
        setUsers(users.filter(u => u.id !== user.id))

        axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
            .catch(err => {
                setError(err.message);
                setUsers([...users]);
            })
    }

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <ul className="list-group">
                {users.map((user: User) =>
                    <li key={user.id} className="list-group-item d-flex justify-content-between"> {user.name}
                        <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
                    </li>)}
            </ul>
        </>
    );
};

export default AppDeletingData;
