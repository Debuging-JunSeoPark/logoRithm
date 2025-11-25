export function validateEmail(email) {
    if (!email) return "Please enter your email.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email (e.g. example@example.com).";
    return "";
}

export function validatePassword(password) {
    if (!password) return "Please enter your password.";

    const rule =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;

    if (!rule.test(password))
        return "Password: 8–20 chars with upper/lowercase, number, special.";

    return "";
}

export function validatePasswordCheck(password, passwordCheck) {
    if (!passwordCheck) return "Please re-enter your password.";
    if (password !== passwordCheck) return "Passwords do not match.";
    return "";
}

export function validateName(name) {
    if (!name) return "Please enter your nickname.";
    if (/\s/.test(name)) return "Nickname cannot contain spaces.";
    if (name.length > 10) return "Nickname can be up to 10 characters.";
    return "";
}
