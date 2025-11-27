import { apiClient } from "@/shared/api";

export async function postListRequest(payload) {
    const response = await apiClient.get("/posts");
    return response.data;
}
