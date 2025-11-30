import { apiClient } from "@/shared/api";

export async function createComment(postId, content) {
    const res = await apiClient.post(`/posts/${postId}/comments`, { content });
    return res.data;
}
