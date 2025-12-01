export function MyInfoItem({
    myinfo,
    nickname,
    onChangeNickname,
    onSubmit,
    saving,
    error,
}) {
    if (!myinfo) return null;

    return (
        <div
            className="
                backdrop-blur-lg bg-white/10
                border border-white/20 shadow-md
                rounded-2xl p-6 space-y-5
            "
        >
            <div className="space-y-1 text-left">
                <p className="text-xs text-gray-500">이메일</p>
                <p className="text-lg font-semibold text-gray-900">{myinfo.email}</p>
            </div>

            <form className="space-y-3" onSubmit={onSubmit}>
                <div className="space-y-2 text-left">
                    <label className="text-xs text-gray-500">닉네임</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            value={nickname}
                            onChange={(e) => onChangeNickname(e.target.value)}
                            placeholder="닉네임을 입력하세요"
                            className="
                                flex-1 px-4 py-3 rounded-lg
                                bg-white/80 text-black placeholder:text-gray-500
                                focus:outline-none focus:ring-2 focus:ring-main/60
                            "
                        />
                        <button
                            type="submit"
                            disabled={saving || !nickname.trim()}
                            className="
                                px-5 py-3 rounded-lg font-semibold text-sm
                                bg-main text-white
                                hover:bg-main/80 active:scale-[0.98]
                                disabled:bg-gray-300 disabled:text-gray-500 disabled:active:scale-100
                                transition
                            "
                        >
                            {saving ? "저장 중..." : "저장"}
                        </button>
                    </div>
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}
                <p className="text-xs text-gray-400">닉네임만 수정할 수 있습니다.</p>
            </form>
        </div>
    );
}
