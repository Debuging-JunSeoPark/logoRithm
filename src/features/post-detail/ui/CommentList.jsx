export function CommentList({ comments, onDelete }) {
    if (!comments.length) {
        return <div className="text-gray-400 text-sm">There is no comments.</div>;
    }

    return (
        <div className="space-y-4">
            {comments.map((comment) => (
                <div
                    key={comment.comment_id}
                    className="backdrop-blur-lg  border border-white rounded-xl p-4"
                >
                    {/* 작성자 + 날짜 */}
                    <div className="flex justify-between items-center text-sm">

                        {/* 왼쪽: 작성자 + 날짜 */}
                        <div className="flex items-center gap-3">
                            <span>{comment.author_name}</span>
                            <span>{formatDate(comment.created_at)}</span>
                        </div>

                        {/* 오른쪽: 삭제 버튼 */}
                        <button
                            onClick={() => onDelete(comment.comment_id)}
                            className="text-xs text-red-300 hover:text-red-400"
                        >
                            del
                        </button>

                    </div>

                    {/* 내용 */}
                    <p className="mt-2  whitespace-pre-wrap text-left">
                        {comment.content}
                    </p>

                    {/* 삭제 버튼 */}

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
