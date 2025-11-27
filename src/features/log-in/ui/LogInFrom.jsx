
import { useLogIn, useLogInForm } from "@/features/log-in";
import Input from "@/shared/ui/input/Input";
import Button from "@/shared/ui/button/Button";

const FIELDS = [
    { label: "Email", name: "email", placeholder: "Enter your email" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
];

export default function LogInForm() {
    const { submitLogIn, loading, error: logInError } = useLogIn();
    const { form, errors, handleChange, handleBlur, isFormValid } = useLogInForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitLogIn(form);
    };

    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            {FIELDS.map(field => (
                <Input
                    key={field.name}
                    {...field}
                    value={form[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors[field.name]}
                />
            ))}

            {logInError  && <p className="text-red-500 text-sm">{logInError}</p>}

            <Button disabled={!isFormValid || loading}>
                {loading ? "Loading..." : "Submit"}
            </Button>
        </form>
    );
}
