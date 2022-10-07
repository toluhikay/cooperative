import Card from "../../components/cardui"

export default function MemberDetails(){

  const accountDetails = [
    {id:1, name:'Shared Capital Account', acr:'SCA', amount:'25,000'},
    {id:1, name:'Thrift Saving Account', acr:'TSA', amount:'40,000'},
    {id:1, name:'Special Deposit Account', acr:'SDA', amount:'600,000'},
    {id:1, name:'Commodity Trading', acr:'CT', amount:'600,000'},
    {id:1, name:'Loan Account', acr:'LA', amount:'50000'},
    {id:1, name:'Project Account', acr:'PA', amount:'30000'},
    {id:1, name:'Total Contribution', acr:'TC', amount:'6000'},
    {id:1, name:'Last Transaction', acr:'LT', amount:'890000'},
  ]

    return(
    <div>    
        <div class="mt-4">
          <div class="lg:w-[90%] h-full grid gap-4 justify-items-center content-center grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            <Card cardData={accountDetails}/>
          </div>
        </div>
    
        <div class="mt-8">

        </div>
    
        <div class="flex flex-col mt-8">
          <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
              >
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                      >
                      Name
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                      >
                      Title
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                      >
                      Status
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                      >
                      Role
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
    
                <tbody class="bg-white">
                  <tr v-for="(u, index) in users">
                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                      >
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            />
                        </div>
    
                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                            {/* {{ u.name }} */}
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                            {/* {{ u.email }} */}
                          </div>
                        </div>
                      </div>
                    </td>
    
                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                      >
                      <div class="text-sm leading-5 text-gray-900">
                        {/* {{ u.title }} */}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {/* {{ u.title2 }} */}
                      </div>
                    </td>
    
                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                        >
                            {/* {{ u.status }} */}
                        </span >
                    </td>
    
                    <td
                      class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                    >
                      {/* {{ u.role }} */}
                    </td>
    
                    <td
                      class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                    >
                      <a href="#" class="text-indigo-600 hover:text-indigo-900"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      )
}



