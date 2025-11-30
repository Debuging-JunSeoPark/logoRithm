import { useState } from "react";

export function usePostSearch() {
    const [search, setSearch] = useState("");

    return { search, setSearch };
}
