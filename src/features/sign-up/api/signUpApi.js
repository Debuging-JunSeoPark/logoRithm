import { apiClient } from "@/shared/api/http";

export async function signUpRequest(payload) {
    const response = await apiClient.post("/users", payload);
    return response.data;
}
