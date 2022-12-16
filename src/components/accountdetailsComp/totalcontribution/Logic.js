import React from "react";
import { _data } from "../../../lib/utils/Data";
import { Table } from "../Logic";

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
  return tableInfo.data.map(({id,date,narration,debit,credit,balance,special_deposit,share_capital,thrift_savings})=> {
  return (
              <tr key={id}>
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                  {id}
                </td>
  
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                      {date}
                </td>
  
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                  {narration}
  
                </td>
  
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                  {debit}
                </td>
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                  {credit}
                </td>
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                  {share_capital}
                </td>
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                  {thrift_savings}
                </td>
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                  {special_deposit}
                </td>
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                  {balance}
                </td>
               
              </tr>
  )
  })
  }

export default function TotalContributionStatment(){
    return <div class="flex flex-col px-4">
    <div class="py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
        <Table render_body={renderTable_body(_data)} render_head={renderTable_head(_data)}/>
      </div>
    </div>
  </div>
}