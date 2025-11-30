import { PostMain } from "@/widgets/post-main";
import { myPostListRequest } from "@/features/post-list";

export default function MyPosts() {
    return (
        <PostMain
            fetcher={myPostListRequest}
            title={
                <>
                    내가 쓴 글 <br /> My posts
                </>
            }
        />
    );
}
