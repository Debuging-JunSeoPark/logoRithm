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
            <h1
                className="font-pen text-[36px] font-black text-center text-[#222] leading-none mt-10"
                suppressHydrationWarning
            >
                {heading}
            </h1>

            <div className="flex justify-end mt-10 ">
                <PostSearch search={search} setSearch={setSearch} />
            </div>

            <PostList search={search} fetcher={fetcher} />
        </div>
    );
}
