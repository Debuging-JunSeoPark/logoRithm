export default function Button({
    children,
    disabled,
    variant = "primary",
    ...props
}) {
    const base = "w-full py-3 mt-3 rounded-md  font-medium transition active:scale-[0.98]";

   const variants = {
        primary: `
            bg-main/80
            backdrop-blur-md
            border border-white/20
            text-white
            shadow-lg shadow-main/50

            hover:bg-main/70
            active:bg-main/90

            disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:active:scale-100 disabled:shadow-black/20
            
        `,
        secondary: `
            bg-gray-200 text-black 
            hover:bg-gray-300 
            active:bg-gray-400
            disabled:bg-gray-200 disabled:text-gray-400
        `,
        ghost: `
            bg-transparent text-main 
            hover:bg-main/10
            disabled:text-gray-400
        `,
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
