import { useState } from "react";
import { logInRequest } from "@/features/log-in";
import { tokenStorage } from "@/shared/auth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from '@/shared/config/routes';

export function useLogIn() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();



    async function submitLogIn(form) {
        try {
            setLoading(true);
            setError("");

            const payload = {
                email: form.email,
                password: form.password,
            };

            const result = await logInRequest(payload);
            const token = result.accessToken;

            if (!token) {
                throw new Error("서버 응답에 accessToken 이 없습니다.");
            }
            tokenStorage.set(token);
            navigate(ROUTES.HOME);
            return result;

        } catch (err) {
            setError(err.message || "Failed to log in");
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return { submitLogIn, loading, error };
}
