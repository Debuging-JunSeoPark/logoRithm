import { useEffect, useState } from "react";
import { MyInfoItem } from "@/features/my-page";
import { useMyPageInfo } from "@/features/my-page/model/useMyInfo";


export default function MyPageContent() {
    const { myinfo, loading, saving, error, onUpdateMyInfo } = useMyPageInfo();
    const [nickname, setNickname] = useState("");
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (myinfo?.nickname) {
            setNickname(myinfo.nickname);
        }
    }, [myinfo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nickname.trim()) return;
        try {
            await onUpdateMyInfo(nickname.trim());
            setEditing(false);
        } catch {
            // 에러 메시지는 훅에서 관리
        }
    };

    const handleEdit = () => setEditing(true);
    const handleCancel = () => {
        setNickname(myinfo?.nickname || "");
        setEditing(false);
    };

    if (loading) {
        return <div className="p-6 text-white">불러오는 중...</div>;
    }

    if (!myinfo) {
        return <div className="p-6 text-red-500">내 정보를 불러오지 못했습니다.</div>;
    }

    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            <div className="flex flex-col gap-4">
                <h1 className="heading-pen mt-10">My Profile</h1>
                <MyInfoItem
                    myinfo={myinfo}
                    nickname={nickname}
                    onChangeNickname={setNickname}
                    onSubmit={handleSubmit}
                    onEdit={handleEdit}
                    onCancel={handleCancel}
                    editing={editing}
                    saving={saving}
                    error={error}
                />
            </div>
        </div>
    );
}
