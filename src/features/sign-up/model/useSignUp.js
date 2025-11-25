import { useState } from "react";
import { signUpRequest } from "@/features/sign-up";

export function useSignUp() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function submitSignUp(form) {
        try {
            setLoading(true);
            setError("");

            const payload = {
                email: form.email,
                password: form.password,
                nickname: form.name,
            };

            const result = await signUpRequest(payload);
            return result;

        } catch (err) {
            setError(err.message || "Failed to sign up");
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return { submitSignUp, loading, error };
}
