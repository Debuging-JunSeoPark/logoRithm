import { apiClient } from "@/shared/api";

export async function fetchMyInfo() {
    const res = await apiClient.get(`/users/me`);
    return res.data ?? res;
}
