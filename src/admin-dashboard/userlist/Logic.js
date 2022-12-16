import Header from '../../dashboard/header';
import { _member_details } from '../../lib/utils/Data';
import {GetMembers}  from '../../api/Api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useToken } from '../../hooks';
import { FullPageLoader } from '../component/ui';
import { useNavigate } from 'react-router-dom';
import { FilteredTable } from '../../components/accountdetailsComp/Logic';

export function TableLink({ data, url, name}) {
    const navigate = useNavigate();
    return <button className='py-2 px-4 bg-indigo-600 rounded text-white inline-block cursor-pointer'
        onClick={() => navigate(url, { state: data })}>
        {name}</button>
};


export function render_head(tableInfo){
    if(!tableInfo) return
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


export function renderTable_body(tableInfo) {
      if (!tableInfo) return;
    return tableInfo.map((cur, idx) => {
        
        const { id, firstName, lastName, username, phoneNumber, role, gender, address, email } = cur;
          const style = "px-6 py-4 text-start border-b border-gray-200 whitespace-nowrap";
          return (
              <tr key={id}>
                  <td
                      className={style}
                  >
                      {idx}
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
                      {phoneNumber}
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
                      <TableLink  data={cur} url={`/admin-dashboard/registered-member/${id}`} name='update' />
                   
                  </td>
                  <td
                      className={style}
                  >
                <TableLink  data={cur} url={`/admin-dashboard/registered-member-details/${id}`} name='View details' />
                  </td>
                  <td
                      className={style}
                  >
                      <button className='py-2 px-4 bg-red-800 rounded text-white'>

                          Remove
                      </button>
                  </td>
                     
              </tr>
              
          );
      });
};
    



export default function AccountSummary(){
    const [members, setMembers] = useState([]);
    const [token] = useToken();
    const [request, setRequest] = useState(true);
    const [page, setPage] = useState(1)

    useEffect(() => {
        GetMembers(page, async (res) => {
            const { status, members, totalNumberOfMembers, message } = await res;
            if (!status) return
            else {
                setRequest(false)
                if (status !== 'success') {
                    toast.error(message)
                } else {
                    setMembers(members);
                }
            };

        }, token)
    }, [token,page])

    function previousPage(){
        setPage((prev) => prev - 1);
    }

    function nextPage() {
        setPage((prev)=> prev + 1)
    }
   
    return <>
        <div className="flex flex-col px-4">
            <Header name='All Registered Member'/>
            <div className="py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                {request ? <FullPageLoader /> : <div
                    className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
                >
                    <FilteredTable data={members} table_head={render_head(_member_details)} render_body={(a) => renderTable_body(a)} page={page} prev={previousPage} next={nextPage} />
                    
                </div>
                }
            </div>
        </div>
    </>
}


 
