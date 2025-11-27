import { useState } from "react";
import { validateEmail, validatePassword} from "@/features/sign-up";

export function useLogInForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
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
        };

        const errMsg = validators[name]?.(value) || "";
        setErrors((prev) => ({ ...prev, [name]: errMsg }));
    };

    const isFormValid =
        !errors.email &&
        !errors.password &&
        form.email &&
        form.password ;

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        isFormValid,
    };
}
