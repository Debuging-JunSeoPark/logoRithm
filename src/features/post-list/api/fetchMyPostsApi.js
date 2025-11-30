import { apiClient } from "@/shared/api";

export async function myPostListRequest({ page, size }, config) {
    const response = await apiClient.get(
        `/posts/me?page=${page}&size=${size}`,
        config
    );
    return response.data;
}
