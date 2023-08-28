//import useData from "./useData.ts";

import genres from "../data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

//const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres;