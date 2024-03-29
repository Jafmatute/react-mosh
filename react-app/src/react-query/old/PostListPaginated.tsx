import usePosts from "../hooks/old/usePostsPaginated.ts";
import {useState} from "react";

const PostList = () => {

    const pageSize =10;
    const [page, setPage] = useState(1);

    const {data: posts, error, isLoading} = usePosts({page, pageSize});

    if(isLoading) return <p>Loading....</p>;

    if(error) return <p>{error.message}</p>;

    return (
       <>
           <ul className="list-group">
               {posts.map(post=> <li className="list-group-item" key={post.id}>{post.title}</li>)}
           </ul>
           <button disabled={page===1} className="btn btn-primary my-3" onClick={()=> setPage(page-1)}>
               Previous
           </button>

           <button className="btn btn-primary my-3 ms-1" onClick={()=> setPage(page+1)}>
               Next
           </button>
       </>
    )
}
export default PostList;
