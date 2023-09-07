import {useQuery} from '@tanstack/react-query';
import APIClient from "../services/api-client.ts";
import genres from "../data/genres.ts";
import ms from 'ms';
import {Genre} from "../entities/Genre.ts";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
})

export default useGenres;