import { CommentItem } from "./CommentItem";

export function CommentList({ comments, onDelete }) {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">댓글 {comments.length}개</h2>

            {comments.map((c) => (
                <CommentItem key={c.comment_id} comment={c} onDelete={onDelete} />
            ))}
        </div>
    );
}
