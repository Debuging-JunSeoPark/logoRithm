import { useEffect, useState } from "react";
import { fetchMyInfo, updateMyInfo } from "@/features/my-page";


export function useMyPageInfo() {
    const [myinfo, setMyInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    async function load() {
        setLoading(true);
        setError("");

        try {
            const detail = await fetchMyInfo();
            const normalized = detail?.data ?? detail;
            setMyInfo(normalized);
        } catch (e) {
            setError(e.message || "내 정보를 불러오지 못했습니다.");
        } finally {
            setLoading(false);
        }
    }

    async function onUpdateMyInfo(nickname) {
        setSaving(true);
        setError("");

        try {
            await updateMyInfo(nickname);
            await load();
        } catch (e) {
            setError(e.message || "닉네임을 수정하지 못했습니다.");
            throw e;
        } finally {
            setSaving(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

    return {
        myinfo,
        loading,
        saving,
        error,
        onUpdateMyInfo

    };
}
