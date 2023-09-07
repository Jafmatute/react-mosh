import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import ContactPage from "./ContactPage.tsx";
import UserDetail from "./UserDetail.tsx";
import Layout from "./Layout.tsx";
import UsersPage from "./UsersPage.tsx";
import ErrorPage from "./ErrorPage.tsx";
import LoginPage from "./LoginPage.tsx";
import PrivateRoutes from "./hooks/PrivateRoutes.tsx";

const route = createBrowserRouter([
    {
        path: '/', element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: '/login', element: <LoginPage/>},
            {path: 'contact', element: <ContactPage/>},
        ]
    },
    {
        element: <PrivateRoutes/>,
        children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: ':id', element: <UserDetail/>},
                ]
            }
        ]
    },
]);

export default route;