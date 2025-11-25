export default function Header() {
    return (
        <header
            className="
                fixed left-1/2 -translate-x-1/2
                w-full max-w-[600px] h-16
                flex items-center justify-between px-4
                backdrop-blur-lg
                border border-white/15
                rounded-b-2xl
                z-50
            "
            >
            <div className="font-pen text-3xl font-extrabold">logoRithm</div>

            <nav className="flex items-center gap-3">
                <button className="text-sm text-gray-600 hover:text-black">
                    로그인
                </button>
                <button className="text-sm text-gray-600 hover:text-black">
                    회원가입
                </button>
            </nav>
        </header>
    );
}
