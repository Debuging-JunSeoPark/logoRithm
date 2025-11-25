import { useSignUp } from "@/features/sign-up";
import { useState } from "react";
import Input from "@/shared/ui/input/Input";
import Button from "@/shared/ui/button/Button";
import { validateEmail, validatePassword, validatePasswordCheck, validateName } from "@/features/sign-up";

export default function SignUpForm() {
    const { submitSignUp, loading, error: signUpError } = useSignUp();

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

        const errorMessage = validators[name]?.(value) || "";
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await submitSignUp(form);
            alert("회원가입 성공!");
        } catch (err) {
            console.error(err);
        }
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

    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <Input
                label="Email"
                name="email"
                value={form.email}
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
            />

            <Input
                label="Password"
                name="password"
                type="password"
                value={form.password}
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
            />

            <Input
                label="Password Check"
                name="passwordCheck"
                type="password"
                value={form.passwordCheck}
                placeholder="Re-enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.passwordCheck}
            />

            <Input
                label="Nickname"
                name="name"
                value={form.name}
                placeholder="Enter your nickname"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
            />

            {signUpError && <p className="text-red-500 text-sm">{signUpError}</p>}

            <Button disabled={!isFormValid || loading}>
                {loading ? "Loading..." : "Submit"}
            </Button>
        </form>
    );
}
