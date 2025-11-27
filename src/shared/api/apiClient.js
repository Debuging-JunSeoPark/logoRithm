import { http } from "./http";

export const apiClient = {
    async get(url, config) {
        const res = await http.get(url, config);
        return res.data;
    },

    async post(url, data, config) {
        const res = await http.post(url, data, config);
        return res.data;
    },

    async put(url, data, config) {
        const res = await http.put(url, data, config);
        return res.data;
    },

    async delete(url, config) {
        const res = await http.delete(url, config);
        return res.data;
    },
};
