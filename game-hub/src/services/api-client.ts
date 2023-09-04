import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6c56c4cea7674bf5af8b5b9d164196b7"
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {

        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
        .then(rsp => rsp.data);
}

export default APIClient;