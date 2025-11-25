export default function Input({ label, error, ...props }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm text-gray-600">{label}</label>}

            <input
                {...props}
                className="
          w-full px-4 py-3 border rounded-xl outline-none 
          border-gray-300 focus:border-main
        "
            />

            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
}
