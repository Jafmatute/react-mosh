import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Posts {
    userId:number;
    id:number;
    title:string;
    body:string;
}

const usePosts = () => {

   const fetchPosts = () => axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
       .then(rsp=> rsp.data);

   return useQuery<Posts[], Error>({
       queryKey: ["posts"],
       queryFn: fetchPosts,
       staleTime: 60*1000 //1m
   });

}


export default usePosts;
