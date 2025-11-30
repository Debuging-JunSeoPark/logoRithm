import { apiClient } from "@/shared/api";

export async function createPost({ title, content }) {
    return await apiClient.post("/posts", { title, content });
}
