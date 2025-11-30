export function CommentItem({ comment, onDelete }) {

    return (
        <div className="border-b py-3">
            <div className="font-semibold text-left">{comment.author_name}</div>
            <div className="font-semibold text-left">{comment.content}</div>

            {isOwner && (
                <button
                    onClick={() => onDelete(comment.comment_id)}
                    className="text-red-500 text-sm mt-2"
                >
                    삭제
                </button>
            )}
        </div>
    );
}
