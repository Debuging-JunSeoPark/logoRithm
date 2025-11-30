import { useState } from "react";

export function PostCreateForm({ onSubmit, loading }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ title, content });
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">

            <div className="
                backdrop-blur-lg bg-white/10 border border-white/20
                p-4 rounded-xl shadow-md flex flex-col gap-4
            ">
                <input
                    type="text"
                    className="
                        w-full bg-transparent border-b border-white/30
                        focus:border-main focus:outline-none text-lg
                        pb-2
                    "
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <textarea
                    className="
                        w-full h-40 bg-transparent border border-white/20
                        rounded-lg p-3 focus:outline-none
                        focus:border-main text-sm
                    "
                    placeholder="내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>

            <button
                disabled={loading}
                className="
                    glass-btn py-3 rounded-lg text-center
                    text-white font-semibold
                "
            >
                {loading ? "작성 중..." : "게시글 작성"}
            </button>
        </form>
    );
}
