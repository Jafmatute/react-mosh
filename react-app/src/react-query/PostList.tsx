import usePosts from "./hooks/usePosts.ts";

const PostList = () => {

    const {data: posts, error, isLoading} = usePosts();

    if(isLoading) return <p>Loading....</p>;

    if(error) return <p>{error.message}</p>;

    return (
        <ul className="list-group">
            {posts.map(post=> <li className="list-group-item" key={post.id}>{post.title}</li>)}
        </ul>
    )
}
export default PostList;
