import { useEffect, useState } from "react";
import { fetchMyInfo, updateMyInfo } from "@/features/my-page";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@shared/config/routes";


export function useMyPageInfo() {
    const [myinfo, setMyInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function load() {
        setLoading(true);

        try {
            const detail = await fetchMyInfo();
            setMyInfo(detail);
        } finally {
            setLoading(false);
        }
    }

    async function onUpdateMyInfo(nickname) {
        await updateMyInfo(nickname);
        await load();
    }

    useEffect(() => {
        load();
    }, []);

    return {
        myinfo,
        loading,
        onUpdateMyInfo

    };
}
