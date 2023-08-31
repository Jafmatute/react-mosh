import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Posts {
    userId:number;
    id:number;
    title:string;
    body:string;
}

const usePosts = (userId:number | undefined) => {

   const fetchPosts = () => axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts/', {
       params:{
           userId
       }
   })
       .then(rsp=> rsp.data);

   return useQuery<Posts[], Error>({
       queryKey: userId ? ['users', userId, 'posts'] : ["posts"],
       queryFn: fetchPosts,
       staleTime: 60*1000 //1m
   });

}


export default usePosts;
