import { useEffect, useRef } from "react";
import { PostListItem } from "@/features/post-list";
import { usePostListIn } from "@/features/post-list";
import { useFilteredPosts } from "@/features/post-list";

export function PostList({ search }) {
    const { posts, loadMore, hasMore, loading } = usePostListIn();
    const filteredPosts = useFilteredPosts(posts, search);

    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    loadMore(); // 🔥 스크롤 시 다음 페이지 불러오기
                }
            },
            { threshold: 0.8 }
        );

        if (observerRef.current) observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, [hasMore, loading]);

    return (
        <div className="flex flex-col gap-4 mt-2 pb-20">

            {filteredPosts.map((post) => (
                <PostListItem key={post.post_id} post={post} />
            ))}

            {/* 무한스크롤 트리거 */}
            <div ref={observerRef} className="h-10" />

            {/* 로딩중 표시 */}
            {loading && (
                <div className="text-gray-400 text-center py-4">불러오는 중...</div>
            )}

            {/* 마지막 페이지 도달 */}
            {!hasMore && !loading && (
                <div className="text-gray-500 text-center py-4">
                    모든 게시물을 불러왔습니다.
                </div>
            )}

        </div>
    );
}
