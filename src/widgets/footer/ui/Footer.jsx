export default function Footer() {
    return (
        <footer className="
        fixed bottom-0 left-0 w-full h-16 
        bg-white/30 backdrop-blur-md border-t border-white/20
        flex items-center justify-around z-50
      "
        >
            <button className="flex flex-col items-center text-xs">
                <span>홈</span>
            </button>

            <button className="flex flex-col items-center text-xs">
                <span>내 글</span>
            </button>

            <button className="flex flex-col items-center text-xs">
                <span>글쓰기</span>
            </button>

            <button className="flex flex-col items-center text-xs">
                <span>채팅</span>
            </button>

            <button className="flex flex-col items-center text-xs">
                <span>마이페이지</span>
            </button>
        </footer>
    );
}
