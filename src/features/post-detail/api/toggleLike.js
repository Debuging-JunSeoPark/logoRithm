import { apiClient } from "@/shared/api";

export async function toggleLike(postId) {
    const res = await apiClient.post(`/posts/${postId}/likes`);
    return res.data;
}
