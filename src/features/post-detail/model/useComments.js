import { useEffect, useState } from "react";
import { fetchComments, createComment, deleteComment} from "@/features/post-detail";


export function useComments(postId) {
    const [comments, setComments] = useState([]);

    async function load() {
        const data = await fetchComments(postId);
        setComments(data);
    }

    async function addComment(content) {
        await createComment(postId, content);
        await load();
    }

    async function removeComment(commentId) {
        await deleteComment(postId, commentId);
        await load();
    }

    useEffect(() => {
        load();
    }, [postId]);

    return {
        comments,
        addComment,
        removeComment,
    };
}
