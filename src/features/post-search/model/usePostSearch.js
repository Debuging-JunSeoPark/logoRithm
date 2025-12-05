import { useEffect, useState } from "react";

export function usePostSearch() {
    const [search, setSearch] = useState("");
    const [debouncedInput, setDebouncedInput] = useState(search);

    useEffect(() => {

        const timerID = setTimeout(() => {
            setDebouncedInput(search);
        }, 1000);

        return () => {
            clearTimeout(timerID);
        }
    }, [search]);

    return { search, setSearch, debouncedInput };


}
