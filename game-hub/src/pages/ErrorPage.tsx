import {Box, Heading, Text} from "@chakra-ui/react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <Navbar/>
            <Box padding={5}>
                <Heading>Ooops!</Heading>
                <Text>{isRouteErrorResponse(error) ? 'this page does not exists.' : 'An unexpected error occurred.'}</Text>
            </Box>
        </>
    )
}
export default ErrorPage
