export default function Input({ label, error, ...props }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-base text-balck-800 text-left font-semibold">{label}</label>}

            <input
                {...props}
                className="
            w-full px-4 py-3 border rounded-md  outline-none 
            border-gray-300 focus:border-secondary bg-white
            "
            />

            <p className="text-red-500 text-xs min-h-4">
                {error ?? ''}
            </p>
        </div>
    );
}
