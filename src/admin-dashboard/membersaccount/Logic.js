import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { GetMemberAccount } from "../../api/Api";
import { useToken } from "../../hooks";
import { FullPageLoader } from "../component/ui";

export default function MemberAccount() {
    const [request, setRequest] = useState(false);
    const [data, setData] = useState([]);

    const location = useLocation();
    const [token] = useToken();
    const url = location.pathname.split('/')[3];

    useEffect(() => {
        GetMemberAccount(url, async (res) => {
            const { status, message, accountDetails } = await res;
            if (status) {
                setRequest(false)
                if (status !== 'success') {
                    toast.error(message);
                } else {
                    setData(accountDetails);
                }
            }
            
        }, token)
    }, [url,token]);

    return <section className="h-screen w-full">
        {console.log(data)}
        {request ? <FullPageLoader /> : <div>data</div>}
    </section>
}