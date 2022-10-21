import { FullPageLoader } from "../component/ui";
import AdminCard from "../component/ui";
import { GetMemberTransaction } from "../../api/Api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useToken } from "../../hooks";

export function CardContent({ data }) {
return   <div class="lg:w-full h-full flex flex-col justify-center items-center ">
<h4 className="text-2xl font-semibold text-gray-100 my-2">{data[0].toUpperCase()}</h4>
    <div className="text-white text-lg">{data[1]}</div>
</div>
}

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
                    const { page, account, transactions, } = await res;
                    console.log(await res)
                    // TABLE FOR ALL THE TRANSACTIONS
                    console.log(transactions);
                    setAccount(() => {
                        return {account:account.accountInformation,transactions:transactions, data: account}
                    })
                }
            }
        },token)
    },[token,id])

    if (!account) {
        return null;
}
    return <section>
        {request && <FullPageLoader/>}
        <article className="container mx-auto py-4">
            <div className="w-full mx-auto h-48 mb-24 mt-4 flex items-center justify-center  ">
                <div className="h-48 w-[23rem] mr-6 rounded-lg bg-indigo-700">

                    {account.data && <CardContent data={Object.entries(account.data)[3]} />}
                </div>

                <div className=" h-48 w-96 rounded-lg bg-indigo-700">
                    {account.data && <CardContent data={Object.entries(account.data)[4]} />}

                </div>
            </div>
            <div class="lg:w-full mx-auto h-full grid gap-4 justify-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">

            <AdminCard cardData={account.account} />
            </div>
            <div>
            {/* FOR THE ACCOUNT TABLE FOR MEMBER */}
            </div>
        </article>
    </section>
}