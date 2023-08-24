import {useEffect, useState} from "react";
import userService, {User} from "../services/use-service.ts";
import {CanceledError} from "../services/api-client.ts";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const {request, cancel} = userService.getAll<User>();

        request.then(res => {
            setUsers(res.data)
            setLoading(false)
        })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            })

        return () => cancel();

    }, []);

    return {
        users,
        error,
        isLoading,
        setUsers,
        setError,
        setLoading
    }
}

export default useUsers;