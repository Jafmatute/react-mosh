import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Posts {
    userId:number;
    id:number;
    title:string;
    body:string;
}

interface PostQuery {
    page:number;
    pageSize:number;
}

const usePosts = (query:PostQuery) => {

   const fetchPosts = () => axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts/', {
       params:{
          _start: (query.page - 1 ) * query.pageSize,
           _limit: query.pageSize
       }
   })
       .then(rsp=> rsp.data);

   return useQuery<Posts[], Error>({
       queryKey: ["posts", query],
       queryFn: fetchPosts,
       staleTime: 60*1000, //1m
       keepPreviousData:true,
   });

}


export default usePosts;
