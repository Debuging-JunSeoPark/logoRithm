import { useSignUp,useSignUpForm } from "@/features/sign-up";
import Input from "@/shared/ui/input/Input";
import Button from "@/shared/ui/button/Button";

export default function SignUpForm() {
    const { submitSignUp, loading, error:signUpError  } = useSignUp();
    const { form, errors, handleChange, handleBlur, isFormValid } = useSignUpForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitSignUp(form);
    };

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
