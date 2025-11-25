import Input from "@/shared/ui/input/Input";
import Button from "@/shared/ui/button/Button";
import { useState } from "react";
import {
    validateEmail,
    validatePassword,
    validatePasswordCheck,
    validateName,
} from "@/features/sign-up/lib";


export default function SignUpForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        passwordCheck: "",
        name: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        passwordCheck: "",
        name: "",
    });


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        let msg = "";

        if (name === "email") msg = validateEmail(value);
        if (name === "password") msg = validatePassword(value);
        if (name === "passwordCheck") msg = validatePasswordCheck(form.password, value);
        if (name === "name") msg = validateName(value);

        setErrors((prev) => ({ ...prev, [name]: msg }));
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

    const isDisabled = !isFormValid;

    return (
        <div className="flex flex-col gap-2 w-full">
            <Input
                label="email"
                name="email"
                type="email"
                placeholder="plz enter your email."
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
            />

            <Input
                label="password"
                name="password"
                type="password"
                placeholder="plz enter your pwd."
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
            />

            <Input
                label="password Check"
                name="passwordCheck"
                type="password"
                placeholder="plz enter your pwd."
                value={form.passwordCheck}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.passwordCheck}
            />

            <Input
                label="Nickname"
                name="name"
                placeholder="plz enter your nickname."
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
            />

            <Button disabled={isDisabled}>submit</Button>
        </div>
    );
}
