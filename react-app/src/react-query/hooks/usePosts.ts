import axios from "axios";
import {useInfiniteQuery} from "@tanstack/react-query";

interface Posts {
    userId:number;
    id:number;
    title:string;
    body:string;
}

interface PostQuery {
    pageSize:number;
}

const usePosts = (query:PostQuery) => {

   const fetchPosts = ({pageParam=1}) => axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts/', {
       params:{
          _start: (pageParam - 1 ) * query.pageSize,
           _limit: query.pageSize
       }
   })
       .then(rsp=> rsp.data);

   return useInfiniteQuery<Posts[], Error>({
       queryKey: ["posts", query],
       queryFn: fetchPosts,
       staleTime: 60*1000, //1m
       keepPreviousData:true,
       getNextPageParam: (lastPage, allPages) => {
           return lastPage.length>0 ? allPages.length +1 : undefined;
       }
   });

}


export default usePosts;
