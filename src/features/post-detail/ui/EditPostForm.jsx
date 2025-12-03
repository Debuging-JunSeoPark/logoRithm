import { useState } from "react";

export function EditPostForm({ post, onSubmit, onCancel }) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    return (
        <div
            className="
                glass-form space-y-6 p-6 
                rounded-2xl
            "
        >
            {/* 제목 */}
            <input
                className="input-glass"
                placeholder="Enter title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            {/* 내용 */}
            <textarea
                className="textarea-glass-medium"
                placeholder="Write your content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            {/* 버튼 */}
            <div className="flex gap-3">

                {/* SAVE */}
                <button
                    onClick={() => onSubmit({ title, content })}
                    className="
                        relative flex-1
                        px-4 py-2 text-sm font-medium text-gray-700
                        rounded-xl bg-white
                        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                        overflow-hidden active:scale-95 transition
                    "
                >
                    <span className="relative z-10 text-xs">Save</span>
                    <span
                        className="
                            absolute inset-0
                            bg-gradient-to-r from-transparent via-green-200 to-green-400
                            opacity-60 blur-xl pointer-events-none
                            "
                    />
                </button>

                {/* CANCEL */}
                <button
                    onClick={onCancel}
                    className="
                        relative flex-1
                        px-4 py-2 text-sm font-medium text-red-700
                        rounded-xl bg-white
                        shadow-[0_4px_20px_rgba(255,0,0,0.08)]
                        overflow-hidden active:scale-95 transition
                    "
                >
                    <span className="relative z-10 text-xs">Cancel</span>
                    <span
                        className="
                            absolute inset-0
                            bg-gradient-to-r from-transparent via-red-200 to-red-400
                            opacity-60 blur-xl pointer-events-none
                            "
                    />
                </button>

            </div>
        </div>

    );
}
