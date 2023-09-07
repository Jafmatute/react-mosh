import {Link} from "react-router-dom";

const UserList = () => {

    const users = [{id: 1, name: "Juan"}, {id: 2, name: "Maria"}, {id: 3, name: "Elena"}];

    return (
        <>
            <ul className="list-group">
                {users.map(user =>
                    <li className="list-group-item" key={user.id}>
                        <Link to={`${user.id}`}>{user.name}</Link>
                    </li>)}
            </ul>
        </>
    )
}
export default UserList
