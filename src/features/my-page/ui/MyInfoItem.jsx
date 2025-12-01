export function MyInfoItem({ myinfo, onUpdateMyInfo }) {

    return (
        <div className="border-b py-3">
            <div className="font-semibold text-left">{myinfo.email}</div>
            <div className="font-semibold text-left">{myinfo.nickname}</div>

            {isOwner && (
                <button
                    onClick={() => onUpdateMyInfo({nickname})}
                    className="text-red-500 text-sm mt-2"
                >
                    수정
                </button>
            )}
        </div>
    );
}