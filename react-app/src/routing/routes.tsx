import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import UserListPage from "./UserListPage.tsx";
import ContactPage from "./ContactPage.tsx";
import UserDetailPage from "./UserDetailPage.tsx";
import Layout from "./Layout.tsx";

const route = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'contact', element: <ContactPage/>},
            {path: 'users', element: <UserListPage/>},
            {path: 'users/:id', element: <UserDetailPage/>},
        ]
    },
]);

export default route;