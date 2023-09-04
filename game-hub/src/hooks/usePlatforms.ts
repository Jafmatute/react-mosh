import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

//const usePlatforms = () => useData<Platform>('platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: platforms
})

export default usePlatforms;