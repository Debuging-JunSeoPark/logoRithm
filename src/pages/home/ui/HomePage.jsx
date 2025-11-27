import { PostList } from "@/features/post-list/ui/PostListItem";
import { tokenStorage } from "@/shared/auth";
export default function HomePage() {
  console.log("🔥 저장된 토큰:", tokenStorage.get());
  return (
    <>
    
      <h1 className="text-2xl font-bold">홈 화면입니다</h1>
      <div className="bg-main w-20 h-10 ">test</div>

      {/* 임시: 게시글 GET 테스트 */}
      <PostList />
    </>
    
  );
}
