import useSWR from "swr";
import api from "../services/api";

export const useApi = (url) => {
    const fetcher = async (url) => {
        const response = await api.get(url);
        return response.data; // IMPORTANTE!
    };

    const { data, error } = useSWR(url, fetcher);

    return { data, error };
};
