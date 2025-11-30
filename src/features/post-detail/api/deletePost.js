import { apiClient } from "@/shared/api";

export async function deletePost(postId) {
    return await apiClient.delete(`/posts/${postId}`);
}
