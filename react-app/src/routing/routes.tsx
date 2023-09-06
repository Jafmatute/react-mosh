import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import UserListPage from "./UserListPage.tsx";

const route = createBrowserRouter([
    {path:'/', element: <HomePage /> },
    {path:'/users', element: <UserListPage /> },
]);

export default route;