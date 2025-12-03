import axios from "axios";
import { tokenStorage } from "@/shared/auth";
import { ROUTES } from "@/shared/config/routes";

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 3000,
    withCredentials: false,
});

console.log("🚀 API Base URL:", import.meta.env.VITE_API_BASE_URL);
console.log("🚀 Axios baseURL:", http.defaults.baseURL);

http.interceptors.request.use((config) => {
    const token = tokenStorage.get();
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

http.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status;

        if (status === 401) {
            tokenStorage.clear();

            // 토큰 만료 시 로그인 페이지로 이동
            if (window.location.pathname !== ROUTES.LOG_IN) {
                window.location.replace(ROUTES.LOG_IN);
            }
        }

        return Promise.reject(error);
    }
);
