import { useState } from "react";

export function CommentForm({ onSubmit }) {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        onSubmit(content);
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border p-2 flex-1 rounded"
                placeholder="댓글 입력..."
            />
            <button className="px-4 bg-blue-500 text-white rounded">
                등록
            </button>
        </form>
    );
}
