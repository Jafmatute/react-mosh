import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import ContactPage from "./ContactPage.tsx";
import UserDetail from "./UserDetail.tsx";
import Layout from "./Layout.tsx";
import UsersPage from "./UsersPage.tsx";
import ErrorPage from "./ErrorPage.tsx";

const route = createBrowserRouter([
    {
        path: '/', element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'contact', element: <ContactPage/>},
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: ':id', element: <UserDetail/>},
                ]
            },
        ]
    },
]);

export default route;