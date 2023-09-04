//import useData from "./useData.ts";

import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {FetchResponse} from "./useData.ts";
import platforms from "../data/platforms.ts";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

//const usePlatforms = () => useData<Platform>('platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ["platform"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('platforms/lists/parents')
        .then(rsp => rsp.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;