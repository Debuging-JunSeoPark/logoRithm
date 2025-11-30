export function CommentItem({ comment, onDelete }) {
    return (
        <div className="border-b py-3">
            <div className="font-semibold">{comment.author_nickname}</div>
            <div>{comment.content}</div>

            <button
                onClick={() => onDelete(comment.comment_id)}
                className="text-red-500 text-sm mt-2"
            >
                삭제
            </button>
        </div>
    );
}
