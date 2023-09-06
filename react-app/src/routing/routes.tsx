import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import UserListPage from "./UserListPage.tsx";
import ContactPage from "./ContactPage.tsx";
import UserDetailPage from "./UserDetailPage.tsx";

const route = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/contact', element: <ContactPage/>},
    {path: '/users', element: <UserListPage/>},
    {path: '/users/:id', element: <UserDetailPage/>},
]);

export default route;