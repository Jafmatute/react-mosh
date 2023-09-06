const UserListPage = () => {

    const users = ["Juan", "Maria", "Elena"];

    return (
        <>
            <ul className="list-group">
                {users.map(user => <li className="list-group-item" key={user}><a href="#">{user}</a></li>)}
            </ul>
        </>
    )
}
export default UserListPage
