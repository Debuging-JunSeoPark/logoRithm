import { apiClient } from "@/shared/api";

export async function postListRequest({ page, size }) {
    console.log("page:", page, "size:", size);

    const response = await apiClient.get(`/posts?page=${page}&size=${size}`);
    return response.data;
}
