import Sidebar from "./sidebar"
import MainSection from "./rightbar"

const dashboardLinks = [
    {id:0, name:'Overview', path:'member-details', header:'member details'},
    {id:1, name:'Account info', path:'account-details', header:'account details'},
    {id:2,name:'Profile', path:'profile', header:'profile'},
    {id:3, name:'Forms', path:'forms', header:'chadvent forms'},
    {id:4, name:'settings', path:'settings', header:'settings'},
    {id:4, name:'Log out', path:'log-out', header:'log out'},
]



export default function Dashboard(){
    return (
        <>
          <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar paths={dashboardLinks}/>

    <div class="flex-1 flex flex-col overflow-hidden">

      <div class="flex-1 px-6 overflow-x-show bg-red-800 overflow-y-auto bg-gray-200">
        <MainSection paths={dashboardLinks}/>
      </div>
    </div>
  </div>
        </>
    )
}