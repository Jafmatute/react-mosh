import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import UserListPage from "./UserListPage.tsx";
import ContactPage from "./ContactPage.tsx";

const route = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/users', element: <UserListPage/>},
    {path: '/contact', element: <ContactPage/>},
]);

export default route;