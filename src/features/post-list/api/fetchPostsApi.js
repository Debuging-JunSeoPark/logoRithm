import { apiClient } from "@/shared/api";

export async function postListRequest({ page, size }) {
    const response = await apiClient.get(`/posts?page=${page}&size=${size}`);
    return response.data;
}
