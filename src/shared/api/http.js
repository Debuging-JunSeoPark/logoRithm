const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiClient = {
    async post(url, body) {
        const res = await fetch(BASE_URL + url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        const json = await res.json();
        if (!res.ok) throw new Error(json?.error?.message || "API Error");

        return json;
    }
};
