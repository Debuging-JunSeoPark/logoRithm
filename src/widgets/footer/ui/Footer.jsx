export default function Footer() {
    return (
        <footer className="
        fixed bottom-0 left-1/2 transform -translate-x-1/2
        w-full max-w-[600px] h-16
        bg-transparent
        border-t border-white/20
        shadow-[0_-4px_20px_rgba(0,0,0,0.12)]

        flex items-center justify-around
        z-50"
        >
            <button className="flex-1 text-center text-sm">홈</button>
            <button className="flex-1 text-center text-sm">내 글</button>
            <button className="flex-1 text-center text-sm">글쓰기</button>
            <button className="flex-1 text-center text-sm">채팅</button>
            <button className="flex-1 text-center text-sm">마이페이지</button>
        </footer>
    );
}
