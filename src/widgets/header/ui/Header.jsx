export default function Header() {
    return (
        <header className="w-full border-b-2 border-main h-14 flex items-center justify-between px-4 ">
            <div className="font-pen text-3xl font-extrabold">logoRithm</div>

            <nav className="flex items-center gap-3">
                <button className="text-sm text-gray-600 hover:text-black">
                    로그인
                </button>
            </nav>
        </header>
    );
}
