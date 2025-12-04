import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";



export function PostDetailContent({ post, onToggleLike, onDelete, onEdit }) {

    return (
        <div
            className="
                backdrop-blur-xl bg-white
                rounded-2xl shadow-lg 
                pt-8 px-6 
                mb-0
            "
        >
            {/* 제목 + 작성자 정보 */}
            <div className="border-b border-white/20 pb-4">
                <h1 className="text-2xl font-bold text-left">
                    {post.title}
                </h1>

                <div className="flex items-center gap-3 mt-2">
                    {/* 프로필 */}
                    <div className="flex flex-col text-left">
                        <span className="text-sm">{post.author_name}</span>
                        <span className="text-xs text-gray-500">
                            {formatDate(post.created_at)}
                        </span>
                    </div>

                    {/* 수정/삭제 */}
                    <div className="ml-auto flex gap-2">
                        {/* Edit */}
                        <button
                            onClick={onEdit}
                            className="
                                relative
                                glass-btn 
                                px-4 py-2
                                text-xs font-medium text-gray-700
                                rounded-md
                                bg-lime-100
                                overflow-hidden active:scale-95 transition
                            "
                        >
                            <span className="relative z-10 text-xs">Edit</span>
                        </button>

                        {/* Delete */}
                        <button
                            onClick={onDelete}
                            className="
                                glass-btn 
                                relative
                                px-4 py-2
                                text-xs font-medium text-gray-700
                                rounded-md
                                bg-red-100
                                overflow-hidden active:scale-95 transition
                            "
                        >
                            <span className="relative z-10 text-xs">Del</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 본문 (Markdown 렌더링) */}
            <div
                className="
                    p-4 rounded-xl
                    bg-gradient-to-br 
                    min-h-[200px]
                    shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                    text-left
                "
                >
                <div className="prose prose-sm max-w-none leading-relaxed text-sm overflow-y-auto">
                    <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    >
                    {post.content}
                    </ReactMarkdown>
                </div>
                </div>

            {/* 좋아요 + 조회수 + 댓글 */}
            <div
                className="
                    p-4 
                    rounded-xl 
                    backdrop-blur-lg bg-white/5 
                    border border-white/10 
                    grid grid-cols-3 gap-3
                    text-center
                "
            >
                {/* 좋아요 */}
                <button
                    onClick={onToggleLike}
                    className="
                        px-4 py-2 w-full
                        flex items-center justify-center gap-2
                    "
                >
                    {post.is_liked ? "❤️" : "🤍"} {post.like_count}
                </button>

                {/* 조회수 */}
                <div
                    className="
                        glass-badge px-4 py-2 w-full
                        flex items-center justify-center
                    "
                >
                    👀 {post.view_count}
                </div>

                {/* 댓글 */}
                <div
                    className="
                        glass-badge px-4 py-2 w-full
                        flex items-center justify-center
                    "
                >
                    💬 {post.comment_count}
                </div>
            </div>
        </div>
    );
}

/* 날짜 포맷 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}
