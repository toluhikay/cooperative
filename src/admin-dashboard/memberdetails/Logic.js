import { FullPageLoader } from "../component/ui";
import AdminCard from "../component/ui";
import { GetMemberTransaction } from "../../api/Api";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useToken } from "../../hooks";
import Modal from "../component/modal";
import { currencyFormater,} from "../../lib/utils/Data";
// import { Button } from "../../ui/button";


export function CardContent({ data, name, styles, getBtnName }) {
    
    return <div className={styles}>
    <div class="lg:w-full h-full flex flex-col justify-center items-center ">
            <h4 className="text-2xl font-semibold text-gray-100 my-2">{data[0].toUpperCase()}</h4>
    <div className="text-white text-lg">{currencyFormater(data[1])}</div>
    <div className="mt-6">
    {/* <Button className="block py-2 px-4 text-indigo-700 bg-white rounded" to='/'>{ name}</Button> */}
    <button onClick={()=> {getBtnName(name)}} className="block py-2 px-4 text-indigo-700 bg-white rounded">{name}</button>
    </div>
    </div>
   
</div>
};

export default function MemberDetails() {

    const [transactionType, setTransactionType] = useState('');
    
    // INPUT AND SELECT STYLING
    const cardOneStyles = "h-48 w-[23rem] mr-6 rounded-lg bg-indigo-700";
    const cardTwoStyle = " h-48 w-96 rounded-lg bg-indigo-700"
    
    const [account, setAccount] = useState({});
    const [request, setRequest] = useState(true);
    const [token] = useToken();
    const location = useLocation();
    
    const id = location.pathname.split('/')[3];
    
    const Credit_account_details = {type:'credit', name:'Credit Account', token, MEMBER_ID: id,  }
    const Debit_account_details = {type:'debit', name:'Debit Account', token, MEMBER_ID: id, styles:cardOneStyles  }


    useEffect(() => {
        const value = { MEMBER_ID: id, TRANSACTION_TYPE: 'alltransactions', page:1, };

        GetMemberTransaction(value, async (res) => {
            if (res) {
                setRequest(false)
                const { status, message } = await res;
                console.log(await res);
                if (status !== 'success') {
                    toast.error(message);
                } else {
                    const { page, account, transactions, } = await res;
                    // TABLE FOR ALL THE TRANSACTIONS
                    
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

                    {account.data && <CardContent styles={cardOneStyles} data={Object.entries(account.data)[2]} name="Credit account" getBtnName={(name)=> setTransactionType(name)} />}

                    {account.data && <CardContent styles={cardTwoStyle} data={Object.entries(account.data)[3]} name='Debit account' getBtnName={(name)=> setTransactionType(name)} />}

            </div>
           
            <div class="lg:w-full mx-auto h-full grid gap-4 justify-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">

            <AdminCard cardData={account.account} />
            </div>
            <div> 
            {/* FOR THE ACCOUNT TABLE FOR MEMBER */}
         </div> 
            {transactionType && transactionType === 'Credit account' && <Modal {...Credit_account_details} remove={(val)=>setTransactionType(val)}/>}

            {transactionType && transactionType === 'Debit account' && <Modal {...Debit_account_details} remove={(val)=>setTransactionType(val)} /> }
        </article>

    </section>
}