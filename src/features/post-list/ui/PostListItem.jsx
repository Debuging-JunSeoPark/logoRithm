import { useNavigate } from "react-router-dom";

export function PostListItem({ post }) {
  const navigate = useNavigate();
  const {
    post_id,
    title,
    author_nickname,
    created_at,
    like_count,
    comment_count,
    view_count,
  } = post;

  const formattedDate = formatDate(created_at);

  return (
    <div
    onClick={() => navigate(`/posts/${post_id}`)}
      className="
        backdrop-blur-lg bg-white/10
        border border-white/20
        shadow-md rounded-xl
        p-4 flex flex-col gap-2
      "
    >
      {/* 제목 */}
      <h3 className="text-lg font-semibold flex">{title}</h3>

      {/* 작성자 + 날짜 */}
      <div className="text-xs  flex gap-2">
        <span>{author_nickname}</span>
        <span>·</span>
        <span>{formattedDate}</span>
      </div>

      {/* 좋아요 / 댓글 / 뷰 */}
      <div className="flex gap-4 text-sm mt-2">
        <span>❤️ {like_count}</span>
        <span>💬 {comment_count}</span>
        <span>👀 {view_count}</span>
      </div>
    </div>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
