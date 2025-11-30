import { PostList } from "@/features/post-list";
import { PostSearch, usePostSearch } from "@/features/post-search";

export function PostMain({ fetcher, title }) {
    const { search, setSearch } = usePostSearch();
    const heading = title || (
        <>
            developer is remembered <br /> by their code
        </>
    );

    return (
        <div className="w-full min-h-screen flex flex-col">
            <h1 className="font-pen text-[36px] font-black text-center text-[#222] leading-none mt-10">
                {heading}
            </h1>

            {/* 검색바 — 리스트 우측 상단 */}
            <div className="flex justify-end mt-10 ">
                <PostSearch search={search} setSearch={setSearch} />
            </div>

            {/*검색어를 전달한 리스트 */}
            <PostList search={search} fetcher={fetcher} />
        </div>
    );
}
