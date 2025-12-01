import { apiClient } from "@/shared/api";

export async function updateMyInfo({nickname, profileImage }) {
    const res = await apiClient.put(`/posts/${postId}`, {
        nickname,
        profileImage,
    });

    return res.data;
}
