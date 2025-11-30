import { apiClient } from "@/shared/api";

export async function deleteComment(postId, commentId) {
    return apiClient.delete(`/posts/${postId}/comments/${commentId}`);
}
