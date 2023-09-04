import {useQuery} from '@tanstack/react-query';
import genres from "../data/genres.ts";
import APIClient from "../services/api-client.ts";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: {count: genres.length, results: genres}
})

export default useGenres;