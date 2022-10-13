import renderTable_head from '../../components/accountdetailsComp/commoditytrading/Logic';
import { Table } from '../../components/accountdetailsComp/Logic';
import { _member_details } from '../../lib/utils/Data';
// const _registeredMember = ['Firstname', 'Lastname', 'Username', 'Email','Phone','Role', 'Gender','Address']

export function render_head(tableInfo){
    return tableInfo.table_head.map((cur,id)=> {
        return (
              <th id={id}
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                {cur}
              </th>
             
        )
    })
  }


  export function renderTable_body (tableInfo){
        return tableInfo.data.map(({id,firstName,lastName,username,phone,role,gender,address,email})=> {
            const style = "px-6 py-4 text-start border-b border-gray-200 whitespace-nowrap"
        return (
                    <tr key={id}>
                      <td
                        className={style}
                        >
                        {id}
                      </td>
        
                      <td
                        className={style}
                        >
                            {firstName}
                      </td>
        
                      <td
                        className={style}
                        >
                        {lastName}
        
                      </td>
        
                      <td
                        className={style}
                        >
                        {username}
                      </td>
                      <td
                        className={style}
                        >
                        {email}
                      </td>
                      <td
                        className={style}
                        >
                        {phone}
                      </td>
                     
                      <td
                        className={style}
                        >
                        {role}
                      </td>
                      <td
                        class={style}
                        >
                        {gender}
                      </td>
                      <td
                        class={style}
                        >
                        {address}
                      </td>
                      <td
                        className={style}
                        >
                        <button className='py-2 px-4 bg-indigo-600 rounded text-white'>

                    Update
                        </button>
                      </td>
                      <td
                        className={style}
                        >
                            <button className='py-2 px-4 bg-red-600 rounded text-white'>

                        Delete
                            </button>
                      </td>
                     
                    </tr>
        )
        })
        }
    



export default function AccountSummary(){
    return <>
    <div className="flex flex-col px-4">
    <div className="py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
    <Table render_head={render_head(_member_details)} render_body={renderTable_body(_member_details)}/>

        </div>
        </div>
        </div>
    </>
}


 
