import { useState } from "react";
import { validateEmail, validatePassword, validatePasswordCheck, validateName } from "@/features/sign-up";

export function useSignUpForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        passwordCheck: "",
        name: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        const validators = {
            email: validateEmail,
            password: validatePassword,
            passwordCheck: (v) => validatePasswordCheck(form.password, v),
            name: validateName,
        };

        const errMsg = validators[name]?.(value) || "";
        setErrors((prev) => ({ ...prev, [name]: errMsg }));
    };

    const isFormValid =
        !errors.email &&
        !errors.password &&
        !errors.passwordCheck &&
        !errors.name &&
        form.email &&
        form.password &&
        form.passwordCheck &&
        form.name;

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        isFormValid,
    };
}
