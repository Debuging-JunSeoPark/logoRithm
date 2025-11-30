import { useState } from "react";
import { createPost } from "@/features/post-create";
import { useNavigate } from "react-router-dom";

export function usePostCreate() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function submit({ title, content }) {
        try {
            setLoading(true);
            await createPost({ title, content });

            alert("게시글이 작성되었습니다!");
            navigate("/");
        } catch (e) {
            alert("게시글 작성 중 오류가 발생했습니다.");
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    return { submit, loading };
}
