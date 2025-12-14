import axios from "axios";

const api = axios.create({
    baseURL: "/api", // ou URL do seu backend
});

export default api;