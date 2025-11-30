import { usePostDetail } from "@/features/post-detail";
import { useComments } from "@/features/post-detail";
import {
    PostDetailContent,
    CommentList,
    CommentForm
} from "@/features/post-detail";

export function PostDetailWidget({ postId }) {
    const { post, loading, onToggleLike } = usePostDetail(postId);
    const { comments, addComment, removeComment } = useComments(postId);

    if (loading) return <div className="p-6">불러오는 중...</div>;

    return (
        <div className="p-6 flex flex-col gap-8">
            <PostDetailContent post={post} onToggleLike={onToggleLike} />

            <CommentForm onSubmit={addComment} />

            <CommentList comments={comments} onDelete={removeComment} />
        </div>
    );
}
