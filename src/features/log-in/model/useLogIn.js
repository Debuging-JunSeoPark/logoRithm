import { useState } from "react";
import { logInRequest } from "@/features/log-in";
import { tokenStorage } from "@/shared/auth";

export function useLogIn() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");




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
            alert("로그인 성공! <추후에 삭제>")
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
