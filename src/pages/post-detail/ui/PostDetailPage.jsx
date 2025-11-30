import { useParams } from "react-router-dom";
import { PostDetailWidget } from "@/widgets/post-detail";

export default function PostDetailPage() {
    const { postId } = useParams();
    return <PostDetailWidget postId={postId} />;
}
