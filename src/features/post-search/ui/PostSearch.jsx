import { useEffect, useState } from "react";

export function PostSearch({ initialValue = "", delay = 300, onDebouncedChange }) {
    const [value, setValue] = useState(initialValue);

    // 외부에서 초기값이 바뀔 때 입력창도 동기화
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    // 입력값 변경을 디바운스해서 부모에 전달
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
