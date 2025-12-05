import { useState } from "react";
import Button from "@/shared/ui/button/Button";

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
            className="flex flex-col gap-6"
        >
            <div
                className="
                    glass-form
                    p-6 rounded-2xl space-y-6
                    "
            >
                <input
                    type="text"
                    className="input-glass"
                    placeholder="Enter title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <textarea
                    className="textarea-glass-tall"
                    placeholder="Write your content in Markdown..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>

            <Button disabled={loading}>
                {loading ? "Loading..." : "Submit"}
            </Button>
        </form>
    );
}
