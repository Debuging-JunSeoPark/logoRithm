import { PostCreateForm } from "@/features/post-create";
import { usePostCreate } from "@/features/post-create";

export function PostCreateWidget() {
    const { submit, loading } = usePostCreate();

    return (
        <div className="p-6">
            <PostCreateForm onSubmit={submit} loading={loading} />
        </div>
    );
}
