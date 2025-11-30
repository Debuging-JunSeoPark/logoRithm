import { useState } from "react";

export function EditPostForm({ post, onSubmit, onCancel }) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    return (
        <div className="space-y-4 glass-card p-4">
            <input
                className="w-full p-2 rounded bg-white/20"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="w-full p-2 rounded bg-white/20 h-40"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <div className="flex gap-3">
                <button
                    onClick={() => onSubmit({ title, content })}
                    className="glass-btn flex-1"
                >
                    저장
                </button>
                <button
                    onClick={onCancel}
                    className="glass-btn flex-1 bg-red-500/20"
                >
                    취소
                </button>
            </div>
        </div>
    );
}
