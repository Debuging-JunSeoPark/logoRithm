import { apiClient } from "@/shared/api";

export async function fetchComments(postId) {
    const res = await apiClient.get(`/posts/${postId}/comments`);
    return res.data?.comments || [];
}
