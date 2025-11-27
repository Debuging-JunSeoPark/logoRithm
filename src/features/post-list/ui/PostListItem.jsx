import { usePostListIn } from "@/features/post-list/model/usePostList";

export function PostList() {
  const { posts, loading, error } = usePostListIn();

  console.log("📌 게시물 응답 데이터:", posts);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <div>
      <h2>게시물 목록</h2>
      <pre className="text-sm whitespace-pre-wrap">
        {JSON.stringify(posts, null, 2)}
      </pre>
    </div>
  );
}
