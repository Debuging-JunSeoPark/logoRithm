export function useFilteredPosts(posts, search) {
    if (!search) return posts;

    return posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );
}
