import { PostCreateForm } from "@/features/post-create";
import { usePostCreate } from "@/features/post-create";

export function PostCreateWidget() {
    const { submit, loading } = usePostCreate();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">게시물 작성</h1>
            <PostCreateForm onSubmit={submit} loading={loading} />
        </div>
    );
}
