import { apiClient } from "@/shared/api";

export async function likePost(postId) {
    const res = await apiClient.post(`/posts/${postId}/likes`);
    console.log(res.data);
    return res.data;
}

export async function unlikePost(postId) {
    return apiClient.delete(`/posts/${postId}/likes`);
}
