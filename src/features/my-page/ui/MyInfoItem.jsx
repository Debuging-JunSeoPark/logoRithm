export function MyInfoItem({
    myinfo,
    nickname,
    onChangeNickname,
    onSubmit,
    onEdit,
    onCancel,
    editing,
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

            <div className="space-y-3">
                <div className="space-y-2 text-left">
                    <label className="text-xs text-gray-500">닉네임</label>

                    {!editing && (
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-900">
                                {myinfo.nickname}
                            </p>
                            <button
                                type="button"
                                onClick={onEdit}
                                className="
                                    px-4 py-3 rounded-lg text-sm font-semibold
                                    bg-main text-white
                                    hover:bg-main/80 active:scale-[0.98]
                                    transition
                                "
                            >
                                수정
                            </button>
                        </div>
                    )}

                    {editing && (
                        <form className="space-y-3" onSubmit={onSubmit}>
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
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        disabled={saving || !nickname.trim()}
                                        className="
                                            px-4 py-3 rounded-lg font-semibold text-sm
                                            bg-main text-white
                                            hover:bg-main/80 active:scale-[0.98]
                                            disabled:bg-gray-300 disabled:text-gray-500 disabled:active:scale-100
                                            transition
                                        "
                                    >
                                        {saving ? "저장 중..." : "저장"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onCancel}
                                        className="
                                            px-4 py-3 rounded-lg font-semibold text-sm
                                            bg-gray-200 text-gray-800
                                            hover:bg-gray-300 active:scale-[0.98]
                                            transition
                                        "
                                    >
                                        취소
                                    </button>
                                </div>
                            </div>

                            {error && <p className="text-red-400 text-sm">{error}</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
