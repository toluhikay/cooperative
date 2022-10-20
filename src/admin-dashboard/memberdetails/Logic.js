import { FullPageLoader } from "../component/ui";
import AdminCard from "../component/ui";
import { GetMemberTransaction } from "../../api/Api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useToken } from "../../hooks";

export default function MemberDetails() {
    const [account, setAccount] = useState({});
    const [request, setRequest] = useState(true);
    const [token] = useToken();
    const location = useLocation();

    const id = location.pathname.split('/')[3];



    useEffect(() => {
        const value = { MEMBER_ID: id, TRANSACTION_TYPE: 'alltransactions', page:1, };

        GetMemberTransaction(value, async (res) => {
            if (res) {
                setRequest(false)
                const { status, message } = await res;
                if (status !== 'success') {
                    toast.error(message);
                } else {
                    const { page, account, transactions } = await res;
                    // TABLE FOR ALL THE TRANSACTIONS
                    console.log(transactions);
                    setAccount(() => {
                        return {account:account.accountInformation,transactions:transactions}
                    })
                }
            }
        },token)
    },[token,id])

    if (!account) {
        return;
}
    return <section>
        {request && <FullPageLoader/>}
        <article className="container mx-auto">
            <div class="lg:w-[90%] h-full grid gap-4 justify-items-center content-center grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            <AdminCard cardData={account.account} />
            </div>
            <div>
            {/* FOR THE ACCOUNT TABLE FOR MEMBER */}
            </div>
        </article>
    </section>
}