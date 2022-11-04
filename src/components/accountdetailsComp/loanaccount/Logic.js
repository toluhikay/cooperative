import { _loan_account } from "../../../lib/utils/Data"
import { Table } from "../Logic"

export function renderTable_head(tableInfo){
    return tableInfo.table_head.map((cur,id)=> {
        return (
              <th id={id}
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                {cur}
              </th>
             
        )
    })
  }
  
  export function renderTable_body (tableInfo){
    return tableInfo.data.map(({id,date,narration,debit,credit,balance})=> {
        const style = "px-6 py-4 text-start border-b border-gray-200 whitespace-nowrap"
    return (
                <tr key={id}>
                  <td
                    class={style}
                    >
                    {id}
                  </td>
    
                  <td
                    class={style}
                    >
                        {date}
                  </td>
    
                  <td
                    class={style}
                    >
                    {narration}
    
                  </td>
    
                  <td
                    class={style}
                    >
                    {debit}
                  </td>
                  <td
                    class={style}
                    >
                    {credit}
                  </td>
                 
                  <td
                    class={style}
                    >
                    {balance}
                  </td>
                 
                </tr>
    )
    })
    }
 


export default function LoanAccount(){
    return <>
    <div class="flex flex-col px-4 bg-red-900">
    <div class="py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
    <Table render_body={renderTable_body(_loan_account)} render_head={renderTable_head(_loan_account)}/>

        </div>
        </div>
        </div>
    </>
}