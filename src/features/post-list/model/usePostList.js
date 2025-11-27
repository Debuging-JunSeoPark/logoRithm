import { useEffect, useState } from "react";
import { postListRequest } from "@/features/post-list";

export function usePostListIn() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        try {
            setLoading(true);
            setError("");

            const res = await postListRequest();

            console.log("🔥 raw response", res);

            // 실제 구조는 res.data 안에 page, size, total, posts가 있음
            const innerData = res?.data;

            if (!innerData || !innerData.posts) {
                throw new Error("데이터 구조가 올바르지 않습니다");
            }

            setPosts(innerData.posts);

        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return { posts, loading, error };
}
