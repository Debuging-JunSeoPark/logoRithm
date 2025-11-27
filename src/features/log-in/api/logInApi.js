import { apiClient } from "@/shared/api";

export const logInRequest = (payload) =>
  apiClient.post("/auth/login", payload);
