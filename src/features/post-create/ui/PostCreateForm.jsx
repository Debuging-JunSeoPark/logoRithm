import { useState } from "react";

export function PostCreateForm({ onSubmit, loading }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ title, content });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 flex flex-col gap-6"
        >
            {/* Form Container */}
            <div
                className="
                    glass-form
                    p-6 rounded-2xl space-y-6
                    "
            >
                {/* Title */}
                <input
                    type="text"
                    className="
                            w-full p-3 rounded-xl
                            bg-white/60
                            shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                            placeholder-gray-400 text-sm
                            focus:outline-none focus:ring-2 focus:ring-orange-300
                        "
                    placeholder="Enter title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                {/* Content */}
                <textarea
                    className="
                        w-full p-3 rounded-xl
                        bg-white/60
                        shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                        h-48 resize-none
                        placeholder-gray-400 text-sm
                        focus:outline-none focus:ring-2 focus:ring-orange-300
                    "
                    placeholder="Write your content in Markdown..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                disabled={loading}
                className="
                    relative py-3 rounded-xl
                    text-gray-700 font-medium text-sm
                    bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]
                    overflow-hidden active:scale-95 transition
                    "
            >
                <span className="relative z-10">
                    {loading ? "Posting..." : "Create Post"}
                </span>

                {/* Gradient glow */}
                <span
                    className="
                        absolute inset-0
                        bg-gradient-to-r from-transparent via-orange-200 to-orange-400
                        opacity-60 blur-xl
                        pointer-events-none
                    "
                />
            </button>
        </form>
    );
}
