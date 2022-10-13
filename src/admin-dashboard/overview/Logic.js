import { useEffect, useState } from "react";
import AdminCard from "../component/ui";
import { GetAccountSummary } from "../../api/Api";
import toast from "react-hot-toast";
import { useToken } from "../../hooks";


export default function Overview (){
  const [details, setDetails] = useState({});
  const [token] = useToken()

useEffect(()=> {
    GetAccountSummary(async (res)=> {
    const {status,message,summary} = await res;
    if(!status)return
    else {
    if(status !== 'success'){
        toast.error(message)
    }
    setDetails(summary)
    
}
},token)
},[token])
    
        return(
        <div>    
                <div class="mt-4">
              <div class="lg:w-[90%] h-full grid gap-4 justify-items-center content-center grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
                <AdminCard cardData={details}/>
              </div>
            </div>  
          </div>
          )
}