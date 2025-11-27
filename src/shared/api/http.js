import axios from "axios";
import { tokenStorage } from "@/shared/auth";

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 3000,
    withCredentials: false,
});

http.interceptors.request.use((config) => {
    console.log("🔍 인터셉터 실행됨, 토큰:", tokenStorage.get());
    const token = tokenStorage.get();
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
