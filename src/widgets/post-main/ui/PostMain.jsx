import { useCallback, useState } from "react";
import { PostList } from "@/features/post-list";
import { PostSearch } from "@/features/post-search";

export function PostMain({ fetcher, title }) {
    // 입력값은 자식(PostSearch)에서 관리하고, 디바운스된 값만 부모가 상태로 들고 있어 불필요 렌더를 줄인다.
    const [search, setSearch] = useState("");
    const handleDebouncedChange = useCallback((value) => {
        setSearch(value);
    }, []);

    const heading = title || (
        <>
            developer is remembered <br /> by their code
        </>
    );

    return (
        <div className="w-full min-h-screen flex flex-col">
            <h1
            className="heading-pen mt-10"
            suppressHydrationWarning
        >
            {heading}
        </h1>

            <div className="flex justify-end mt-10 ">
                <PostSearch onDebouncedChange={handleDebouncedChange} />
            </div>

            <PostList search={search} fetcher={fetcher} />
        </div>
    );
}
