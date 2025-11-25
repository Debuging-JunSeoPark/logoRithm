export default function Button({
    child,
    disabled,
    variant = "primary",
    ...props
}) {
    const base = "w-full py-3 rounded-xl font-medium transition active:scale-[0.98]";

    const variants = {
        primary: "bg-main text-white disabled:bg-gray-300",
        secondary: "bg-gray-200 text-black",
        ghost: "bg-transparent text-main",
    };

    return (
        <button
            className={`${base} ${variants[variant]}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );


}
