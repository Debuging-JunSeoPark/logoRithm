export function PostDetailContent({ post, onToggleLike, onDelete, onEdit }) {
    return (
        <div
            className="
                backdrop-blur-xl bg-white/10 
                border border-white/20 
                rounded-2xl shadow-lg 
                p-8 space-y-10
            "
        >

            {/* 🔹 1. 제목 + 작성자 정보 */}
            <div className="space-y-4 pb-6 border-b border-white/20">
                <h1 className="text-3xl font-bold">{post.title}</h1>

                <div className="flex items-center gap-3">
                    {/* 프로필 */}
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md" />

                    <div className="flex flex-col">
                        <span className="text-sm">{post.author_nickname}</span>
                        <span className="text-xs text-gray-300">
                            {formatDate(post.created_at)}
                        </span>
                    </div>

                    {/* 수정/삭제 */}
                    <div className="ml-auto flex gap-2">
                        <button onClick={onEdit} className="glass-btn-small">수정</button>
                        <button onClick={onDelete} className="glass-btn-small">삭제</button>
                    </div>
                </div>
            </div>


            {/* 🔹 2. 본문 */}
            <div className="space-y-4">
                <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
                    {post.content}
                </p>

                {/* 이미지 영역 (없으면 숨김) */}
                {post.images?.length > 0 && (
                    <div className="space-y-2">
                        {post.images.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                className="rounded-xl border border-white/10"
                            />
                        ))}
                    </div>
                )}
            </div>


            {/* 🔹 3. 좋아요 + 조회수 + 댓글 */}
            <div
                className="
                mt-6 p-4 
                rounded-xl 
                backdrop-blur-lg bg-white/5 
                border border-white/10 
                flex items-center gap-6
            "
            >
                {/* 좋아요 */}
                <button
                    onClick={onToggleLike}
                    className="
                        glass-btn px-6 py-3 
                        flex items-center gap-2
                    "
                >
                    {post.is_liked ? "❤️" : "🤍"} {post.like_count} 좋아요
                </button>

                {/* 수치 정보 */}
                <div className="flex gap-4 text-gray-200">
                    <div className="glass-badge">👀 {post.view_count} 조회수</div>
                    <div className="glass-badge">💬 {post.comment_count} 댓글</div>
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
