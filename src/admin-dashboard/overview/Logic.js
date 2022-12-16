import { useEffect, useState } from "react";
import AdminCard from "../component/ui";
import { GetAccountSummary } from "../../api/Api";
import toast from "react-hot-toast";
import { useToken } from "../../hooks";
import { FullPageLoader } from "../component/ui";
import { FilteredTable } from "../../components/accountdetailsComp/Logic";


export default function Overview (){
  const [details, setDetails] = useState({});
  const [token] = useToken();
  const [request, setRequest] = useState(true)

useEffect(()=> {
  GetAccountSummary(async (res) => {
      
    const { status, message, summary } = await res;
    console.log(await res)
    if(!status)return
    else {
      setRequest(false)
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
              {request ?  <FullPageLoader /> :
              <div class="lg:w-full mx-auto h-full grid gap-4 justify-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
               <AdminCard cardData={details} />
              </div>
              }
            </div> 
            {/* <div
                    className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
                > */}
            {/* <FilteredTable  /> */}
            {/* <FilteredTable data={members} table_head={render_head(_member_details)} render_body={(a) => renderTable_body(a)} page={page} prev={previousPage} next={nextPage} /> */}
          {/* </div> */}
          </div>
          )
}