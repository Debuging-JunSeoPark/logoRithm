export function PostSearch({ search, setSearch }) {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="제목 검색…"
            className="border border-gray-300 rounded-l px-3 py-2 text-sm bg-white"
        />
    );
}
