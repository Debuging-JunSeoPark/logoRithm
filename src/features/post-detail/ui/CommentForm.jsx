import { useState } from "react";

export function CommentForm({ onSubmit }) {
    const [text, setText] = useState("");

    return (
        <div className="glass p-4 rounded-2xl">
            <textarea
                className="
                    w-full h-24 bg-white/10 text-white rounded-xl p-4
                    border border-white/20 backdrop-blur-lg
                    focus:outline-none focus:ring-2 focus:ring-purple-300/40
                "
                placeholder="댓글을 남겨주세요!"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="flex justify-end mt-3">
                <button
                    onClick={() => {
                        if (!text.trim()) return;
                        onSubmit(text);
                        setText("");
                    }}
                    className="glass-btn px-5 py-2"
                >
                    댓글 등록
                </button>
            </div>
        </div>
    );
}
