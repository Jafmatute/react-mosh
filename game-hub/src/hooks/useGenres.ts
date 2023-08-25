import useData from "./useData.ts";

export interface Genre {
    id: number;
    name: string;
    slung: string;
    image_background: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;