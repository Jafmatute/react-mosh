import usePosts from "./hooks/usePosts.ts";
import {Fragment} from "react";

const PostList = () => {

    const pageSize =10;

    const {data, error, isLoading, fetchNextPage, isFetchingNextPage} = usePosts({pageSize});

    if(isLoading) return <p>Loading....</p>;

    if(error) return <p>{error.message}</p>;

    return (
       <>
           <ul className="list-group">
               {data?.pages.map((page, index) => <Fragment key={index}>
                   {page.map(post => <li className="list-group-item" key={post.id}>{post.title}</li>)}
               </Fragment>)}
           </ul>
           <button disabled={isFetchingNextPage} className="btn btn-primary my-3" onClick={()=> fetchNextPage()}>
               {isFetchingNextPage ? 'Loading...' : 'Load More'}
           </button>
       </>
    )
}
export default PostList;
