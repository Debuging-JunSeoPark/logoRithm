import { useEffect, useState } from "react";

export function PostSearch({ initialValue = "", delay = 300, onDebouncedChange }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            onDebouncedChange?.(value);
        }, delay);
        return () => clearTimeout(timerId);
    }, [value, delay, onDebouncedChange]);

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="search title…"
            className="border border-gray-300 rounded-l px-3 py-2 text-sm bg-white"
        />
    );
}
