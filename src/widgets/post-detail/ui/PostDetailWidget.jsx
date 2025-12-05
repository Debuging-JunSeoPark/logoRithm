import { useState } from "react";
import { usePostDetail } from "@/features/post-detail";
import { useComments } from "@/features/post-detail";
import {
    PostDetailContent,
    CommentList,
    CommentForm,
    EditPostForm
} from "@/features/post-detail";

export function PostDetailWidget({ postId }) {
    const { post, loading, onToggleLike, onDelete, onUpdatePost } = usePostDetail(postId);
    const { comments, addComment, removeComment } = useComments(postId);
    const [isEditMode, setIsEditMode] = useState(false);

    if (loading) return <div className="p-6 text-white">불러오는 중...</div>;

    return (
        <div className="
            max-w-3xl mx-auto mt-10
            backdrop-blur-2xl bg-white/10
            border border-white/20
            shadow-xl rounded-3xl
            p-8 space-y-10
        ">
            {!isEditMode ? (
                <PostDetailContent
                    post={post}
                    onToggleLike={onToggleLike}
                    onEdit={() => setIsEditMode(true)}
                />
            ) : (
                <EditPostForm
                    post={post}
                    onSubmit={(data) => {
                        onUpdatePost(data);
                        setIsEditMode(false); 
                    }}
                    onCancel={() => setIsEditMode(false)}
                />
            )}
            <div className="border-t border-white/20 pt-6">
                <CommentForm onSubmit={addComment} />
            </div>

            <CommentList comments={comments} onDelete={removeComment} />
        </div>
    );
}
