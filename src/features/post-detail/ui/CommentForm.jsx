import { useState } from "react";

export function CommentForm({ onSubmit }) {
    const [text, setText] = useState("");

    return (
        <div className="rounded-2xl">
            <textarea
                className="
                    w-full h-24 bg-white rounded-xl p-4
                    border border-white/20 backdrop-blur-lg
                    focus:outline-none  
                "
                placeholder="Comment..."
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
                    className="
                        relative
                        px-5 py-2
                        text-sm font-medium text-gray-700
                        rounded-xl
                        bg-white
                        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                        overflow-hidden
                        active:scale-95 transition
                    "
                >
                    <span className="relative z-10 text-xs">Submit</span>

                    <span
                        className="
                            absolute inset-0
                            bg-gradient-to-r from-transparent via-orange-200 to-orange-400
                            opacity-60 blur-xl
                            pointer-events-none
                            "
                    />
                </button>

            </div>
        </div>
    );
}
