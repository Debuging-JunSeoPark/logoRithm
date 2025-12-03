import { PostCreateForm } from "@/features/post-create";
import { usePostCreate } from "@/features/post-create";

export function PostCreateWidget() {
    const { submit, loading } = usePostCreate();

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-pen text-[36px] font-black text-center text-[#222] leading-none mt-10">Just write any insight</h1>
            <PostCreateForm onSubmit={submit} loading={loading} />
        </div>
    );
}
