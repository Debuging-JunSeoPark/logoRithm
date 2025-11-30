import { CommentItem } from "./CommentItem";

export function CommentList({ comments, onDelete }) {
    if (!comments.length) {
        return <div className="text-gray-400 text-sm">댓글이 없습니다.</div>;
    }

    return (
        <div className="space-y-4">
            {comments.map((comment) => (
                <div
                    key={comment.comment_id}
                    className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4"
                >
                    {/* 작성자 + 날짜 */}
                    <div className="flex justify-between items-center text-gray-300 text-sm">
                        <span>{comment.author_nickname}</span>
                        <span>{formatDate(comment.created_at)}</span>
                    </div>

                    {/* 내용 */}
                    <p className="mt-2 text-gray-200 whitespace-pre-wrap">
                        {comment.content}
                    </p>

                    {/* 삭제 버튼 */}
                    <button
                        onClick={() => onDelete(comment.comment_id)}
                        className="mt-2 text-xs text-red-300 hover:text-red-400"
                    >
                        삭제
                    </button>
                </div>
            ))}
        </div>
    );
}

/* ✨ 날짜 포맷 함수 추가 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}
