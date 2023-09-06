import {useParams} from "react-router-dom";

const UserDetailPage = () => {
    const params = useParams();
    //search params
    // const [searchParams, setSearchParams] = useSearchParams();
    //console.log(searchParams.get("name"));

    //location path
    // const location = useLocation();
    // console.log(location);


    return (
        <>
            <p>User ID:
                <span className="badge text-bg-secondary">{params.id}</span>
            </p>
        </>
    )
}
export default UserDetailPage
