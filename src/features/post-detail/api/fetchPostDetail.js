import { apiClient } from "@/shared/api";

export async function fetchPostDetail(postId) {
    const res = await apiClient.get(`/posts/${postId}`);
    return res.data?.data?.data; // post detail만 반환
}
