export function PostDetailContent({ post, onToggleLike }) {
    if (!post) return null;

    return (
        <div className="flex flex-col gap-4 px-3 py-2">

            <h1 className="text-2xl font-bold">{post.title}</h1>

            <div className="text-gray-600">{post.author_nickname}</div>

            <div className="text-gray-400 text-sm">
                {new Date(post.created_at).toLocaleString()}
            </div>

            <p className="mt-4">{post.content}</p>

            <button
                onClick={onToggleLike}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
                ❤️ {post.like_count}
            </button>

        </div>
    );
}
