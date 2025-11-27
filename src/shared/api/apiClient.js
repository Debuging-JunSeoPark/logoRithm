import { http } from "./http";

export const apiClient = {
    get(url, config) {
        return http.get(url, config).then((res) => res.data);
    },
    post(url, data, config) {
        return http.post(url, data, config).then((res) => res.data);
    },
    put(url, data, config) {
        return http.put(url, data, config).then((res) => res.data);
    },
    delete(url, config) {
        return http.delete(url, config).then((res) => res.data);
    },
};
