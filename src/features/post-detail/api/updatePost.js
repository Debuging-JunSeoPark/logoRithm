import { apiClient } from "@/shared/api";

export async function updatePost(postId, { title, content }) {
    const res = await apiClient.patch(`/posts/${postId}`, {
        title,
        content,
    });

    return res.data;
}
