import { useEffect, useState } from "react";
import { fetchPostDetail } from "@/features/post-detail";
import { likePost, unlikePost, deletePost, updatePost } from "@/features/post-detail";
import { useNavigate } from "react-router-dom";

export function usePostDetail(postId) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    async function load() {
        setLoading(true);

        try {
            const detail = await fetchPostDetail(postId); 
            setPost(detail); // detail = data.data 구조
        } finally {
            setLoading(false);
        }
    }

    async function onToggleLike() {
        if (!post) return;

        try {
            if (post.is_liked) {
                await unlikePost(postId);
            } else {
                await likePost(postId);
            }

            load(); // 좋아요 변경 후 다시 갱신
        } catch (e) {
            console.error("좋아요 처리 실패:", e);
        }
    }

    async function onDelete() {
        const ok = confirm("정말 이 게시물을 삭제하시겠습니까?");
        if (!ok) return;

        try {
            await deletePost(postId);
            alert("게시물이 삭제되었습니다.");
            navigate("/");  // 🔥 삭제 후 홈으로 이동
        } catch (e) {
            alert("삭제 중 오류가 발생했습니다.");
        }
    }

    async function onUpdatePost({ title, content }) {
        await updatePost(postId, { title, content });
        await load();
    }

    useEffect(() => {
        load();
    }, [postId]);

    return {
        post,
        loading,
        onToggleLike,
        onDelete,
        onUpdatePost,
    };
}
