import {useEffect, useState} from "react";
import {CanceledError} from '../services/api-client.ts';
import userService, {User} from "../services/use-service-old.ts";

const AppUserService = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const {request, cancel} = userService.getAllUsers();

        request.then(res => {
            setUsers(res.data)
            setLoading(false)
        })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })

        return () => cancel();

    }, []);

    const deleteUser = (user: User) => {
        setUsers(users.filter(u => u.id !== user.id))

        userService.deleteUser(user.id)
            .catch(err => {
                setError(err.message);
                setUsers([...users]);
            })
    }

    const addUser = () => {
        const newUser: User = {id: 0, name: "Josue"};

        setUsers([newUser, ...users])

        userService.createUser(newUser)
            .then(({data: saveUser}) => setUsers([saveUser, ...users]))
            .catch(err => {
                setError(err.message)
                setUsers([...users]);
            })

    };

    const updateUser = (user: User) => {
        const updateUser = {...user, name: user.name + '!'};
        setUsers(users.map(u => u.id === user.id ? updateUser : u));
        userService.updateUser(updateUser)
            .catch(err => {
                setError(err.message);
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
                        <div>
                            <button className="btn btn-secondary mx-1" onClick={() => updateUser(user)}>Update</button>
                            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
                        </div>
                    </li>)}
            </ul>
        </>
    );
};

export default AppUserService;
