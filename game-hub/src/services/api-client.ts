import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[]
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6c56c4cea7674bf5af8b5b9d164196b7"
    },
})