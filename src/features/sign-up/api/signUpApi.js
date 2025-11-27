import { apiClient } from "@/shared/api";

export async function signUpRequest(payload) {
    const response = await apiClient.post("/users", payload);
    return response.data;
}
