import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { GetMemberAccount } from "../../api/Api";
import { useToken } from "../../hooks";
import { FullPageLoader } from "../component/ui";
import { accountData } from "../../lib/utils/Data";
import { FilteredTable } from "../../components/accountdetailsComp/Logic";
import { renderTable_body, render_head } from "./AccountComp";








export default function MemberAccount() {
    const [request, setRequest] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const location = useLocation();
    const [token] = useToken();
    const url = location.pathname.split('/')[3];


    function nextPage() {
        setPage((state) => state + 1);
    }

    function previousPage() {
        setPage((state)=> state - 1)
    }

    useEffect(() => {
        GetMemberAccount(url, async (res) => {
            const { status, message, accountDetails } = await res;
            if (status) {
                setRequest(false)
                if (status !== 'success') {
                    toast.error(message);
                } else {
                    // console.log(accountDetails)
                    // setData(accountDetails);
                    setData(accountData)
                }
            }
            
        }, token)
    }, [url, token]);
    


 {/* <FilteredTable data={members} table_head={render_head(_member_details)} render_body={(a) => renderTable_body(a)} page={page} prev={previousPage} next={nextPage} /> */}

    return <section className="h-screen w-full">
        {request ? <FullPageLoader /> : <div>
            <FilteredTable data={accountData} table_head={render_head(accountData)} render_body={(a)=>renderTable_body(a)} page={page} prev={previousPage} next={nextPage} />
        </div>}
    </section>
}