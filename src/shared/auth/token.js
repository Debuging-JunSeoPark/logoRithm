export const ACCESS_TOKEN_KEY = "access_token";

export const tokenStorage = {
    set(token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },
    get() {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    },
    clear() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    },

    isAuthenticated() {
        return !!localStorage.getItem(ACCESS_TOKEN_KEY);
    },
};
