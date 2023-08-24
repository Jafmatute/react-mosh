import userService, {User} from "../services/use-service.ts";
import useUsers from "../hooks/useUsers.ts";

const AppCustomHook = () => {
    const {isLoading, users, error, setUsers, setError} = useUsers();

    const deleteUser = (user: User) => {
        setUsers(users.filter(u => u.id !== user.id))
        userService.delete(user.id)
            .catch(err => {
                setError(err.message);
                setUsers([...users]);
            })
    }

    const addUser = () => {
        const newUser: User = {id: 0, name: "Josue"};

        setUsers([newUser, ...users])

        userService.create(newUser)
            .then(({data: saveUser}) => setUsers([saveUser, ...users]))
            .catch(err => {
                setError(err.message)
                setUsers([...users]);
            })

    };

    const updateUser = (user: User) => {
        const updateUser = {...user, name: user.name + '!'};
        setUsers(users.map(u => u.id === user.id ? updateUser : u));
        userService.update(updateUser)
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

export default AppCustomHook;
