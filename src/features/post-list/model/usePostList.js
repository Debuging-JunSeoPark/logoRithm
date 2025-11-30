import { useEffect, useState } from "react";
import { postListRequest } from "@/features/post-list";

const PAGE_SIZE = 10;

export function usePostListIn() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasMore, setHasMore] = useState(true);


    const loadMore = () => {
        if (!hasMore || loading) return;
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        const controller = new AbortController();
        async function load() {
            try {
                setLoading(true);

                const res = await postListRequest(
                    { page, size: PAGE_SIZE },
                    { signal: controller.signal }
                );

                const list = res?.data?.posts || [];
                // 데이터 이어붙이기
                setPosts((prev) => [...prev, ...list]);
                // 마지막 페이지 체크
                if (list.length < PAGE_SIZE) {
                    setHasMore(false);
                }
            } catch (e) {
                if (e.name === "AbortError") return;
                setError(e.message);
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, [page]);

    return {
        posts,
        loadMore,
        loading,
        hasMore,
        error,
    };
}
