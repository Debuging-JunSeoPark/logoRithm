import { useEffect, useState } from "react";
import { fetchPostDetail } from "@/features/post-detail";
import { likePost, unlikePost, deletePost, updatePost } from "@/features/post-detail";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@shared/config/routes";

export function usePostDetail(postId) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function load() {
        setLoading(true);

        try {
            const detail = await fetchPostDetail(postId);
            setPost(detail);
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

            load();
        } catch (e) {
            console.error("Failed to process like.:", e);
        }
    }

    async function onDelete() {
    const ok = confirm("Are you sure you want to delete this post?");
    if (!ok) return;

    try {
        const res = await deletePost(postId);
        console.log("DELETE RESPONSE >>>", res);

        alert("The post has been deleted.");
        navigate(ROUTES.HOME);
    } catch (e) {
        console.error("DELETE ERROR >>>", e);
        alert("An error occurred while deleting the post.");
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
