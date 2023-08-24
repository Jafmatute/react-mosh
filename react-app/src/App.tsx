import {useEffect, useState} from "react";
import axios from "axios";

interface User {
    id: number;
    name: string;
}

const App = () => {
    const [users, setUsers] = useState<User>([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data));
    }, []);

    console.log(users)

    return (
        <ul>
            {users.map((user: User) => <li key={user.id}> {user.name}</li>)}
        </ul>
    );
};

export default App;
