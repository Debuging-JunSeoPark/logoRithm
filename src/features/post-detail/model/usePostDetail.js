import { useEffect, useState } from "react";
import { fetchPostDetail } from "@/features/post-detail";
import { toggleLike } from "@/features/post-detail";

export function usePostDetail(postId) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    async function load() {
        setLoading(true);
        try {
            const data = await fetchPostDetail(postId);
            setPost(data);
        } finally {
            setLoading(false);
        }
    }

    async function onToggleLike() {
        await toggleLike(postId);
        load(); // 좋아요 후 다시 갱신
    }

    useEffect(() => {
        load();
    }, [postId]);

    return {
        post,
        loading,
        onToggleLike,
    };
}
