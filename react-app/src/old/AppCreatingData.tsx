import {useEffect, useState} from "react";
import axios, {CanceledError} from "axios";

interface User {
    id: number;
    name: string;
}

const AppCreatingData = () => {
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

    const addUser = () => {
        const newUser: User = {id: 0, name: "Josue"};

        setUsers([newUser, ...users])

        axios.post("https://jsonplaceholder.typicode.com/users", newUser)
            .then(({data: saveUser}) => setUsers([saveUser, ...users]))
            .catch(err => {
                setError(err.message)
                setUsers([...users]);
            })

    };

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
            <ul className="list-group">
                {users.map((user: User) =>
                    <li key={user.id} className="list-group-item d-flex justify-content-between"> {user.name}
                        <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
                    </li>)}
            </ul>
        </>
    );
};

export default AppCreatingData;
