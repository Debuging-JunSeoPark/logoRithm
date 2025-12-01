import { apiClient } from "@/shared/api";

export async function updateMyInfo(nickname) {
    const res = await apiClient.put(`/users/me`, {
        nickname,
    });

    return res.data;
}
